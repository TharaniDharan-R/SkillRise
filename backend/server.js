import { createServer } from "node:http";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "data");
const USERS_FILE = join(DATA_DIR, "users.json");
const PORT = Number(process.env.PORT ?? 4000);
const sessions = new Map();

async function ensureStore() {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    await readFile(USERS_FILE, "utf8");
  } catch {
    await writeFile(USERS_FILE, JSON.stringify({ users: [] }, null, 2));
  }
}

async function readStore() {
  await ensureStore();
  return JSON.parse(await readFile(USERS_FILE, "utf8"));
}

async function writeStore(store) {
  await writeFile(USERS_FILE, JSON.stringify(store, null, 2));
}

function hashPassword(password, salt = randomBytes(16).toString("hex")) {
  const hash = scryptSync(password, salt, 64).toString("hex");
  return { salt, hash };
}

function verifyPassword(password, salt, expectedHash) {
  const actual = Buffer.from(hashPassword(password, salt).hash, "hex");
  const expected = Buffer.from(expectedHash, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function createToken(userId) {
  const token = randomBytes(32).toString("hex");
  sessions.set(token, userId);
  return token;
}

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    goal: user.goal,
    domainIds: user.domainIds,
    createdAt: user.createdAt,
  };
}

function createInitialProgress(domainIds) {
  return {
    domainIds,
    xp: 0,
    completedTopics: {},
    startedAt: new Date().toISOString(),
  };
}

async function parseBody(req) {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
  }
  return body ? JSON.parse(body) : {};
}

function send(res, status, data) {
  res.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(data));
}

function getBearerToken(req) {
  const header = req.headers.authorization ?? "";
  return header.startsWith("Bearer ") ? header.slice(7) : "";
}

async function requireUser(req) {
  const token = getBearerToken(req);
  const userId = sessions.get(token);
  if (!userId) return null;

  const store = await readStore();
  return store.users.find((user) => user.id === userId) ?? null;
}

async function handleRegister(req, res) {
  const body = await parseBody(req);
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");
  const name = String(body.name ?? "").trim();
  const domainIds = Array.isArray(body.domainIds) ? body.domainIds : [];

  if (!name || !email || password.length < 6 || !domainIds.length) {
    send(res, 400, { message: "Name, email, password, and at least one domain are required." });
    return;
  }

  const store = await readStore();
  if (store.users.some((user) => user.email === email)) {
    send(res, 409, { message: "An account already exists for this email. Please login." });
    return;
  }

  const passwordHash = hashPassword(password);
  const progress = createInitialProgress(domainIds);
  const user = {
    id: randomBytes(12).toString("hex"),
    name,
    email,
    goal: String(body.goal ?? "").trim(),
    domainIds,
    passwordHash,
    progress,
    createdAt: new Date().toISOString(),
  };

  store.users.push(user);
  await writeStore(store);

  send(res, 201, {
    token: createToken(user.id),
    user: publicUser(user),
    progress,
  });
}

async function handleLogin(req, res) {
  const body = await parseBody(req);
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");
  const store = await readStore();
  const user = store.users.find((candidate) => candidate.email === email);

  if (!user || !verifyPassword(password, user.passwordHash.salt, user.passwordHash.hash)) {
    send(res, 401, { message: "Invalid email or password." });
    return;
  }

  send(res, 200, {
    token: createToken(user.id),
    user: publicUser(user),
    progress: user.progress ?? createInitialProgress(user.domainIds),
  });
}

async function handleSaveProgress(req, res) {
  const authUser = await requireUser(req);
  if (!authUser) {
    send(res, 401, { message: "Login required." });
    return;
  }

  const body = await parseBody(req);
  const store = await readStore();
  const user = store.users.find((candidate) => candidate.id === authUser.id);
  user.progress = {
    ...body.progress,
    savedAt: new Date().toISOString(),
  };
  await writeStore(store);

  send(res, 200, { progress: user.progress });
}

const server = createServer(async (req, res) => {
  try {
    if (req.method === "OPTIONS") {
      send(res, 204, {});
      return;
    }

    if (req.url === "/api/health" && req.method === "GET") {
      send(res, 200, { status: "ok" });
      return;
    }

    if (req.url === "/api/auth/register" && req.method === "POST") {
      await handleRegister(req, res);
      return;
    }

    if (req.url === "/api/auth/login" && req.method === "POST") {
      await handleLogin(req, res);
      return;
    }

    if (req.url === "/api/progress" && req.method === "PUT") {
      await handleSaveProgress(req, res);
      return;
    }

    send(res, 404, { message: "Route not found." });
  } catch (error) {
    console.error(error);
    send(res, 500, { message: "Server error." });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`SkillRise API running at http://127.0.0.1:${PORT}`);
});
