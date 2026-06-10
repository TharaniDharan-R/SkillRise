const API_BASE = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:4000/api";

async function request(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
  };

  const response = await fetch(`${API_BASE}${path}`, {
    method: options.method ?? "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message ?? "Something went wrong. Please try again.");
  }

  return data;
}

export function registerUser(profile) {
  return request("/auth/register", {
    method: "POST",
    body: profile,
  });
}

export function loginUser(credentials) {
  return request("/auth/login", {
    method: "POST",
    body: credentials,
  });
}

export function saveProgress(token, progress) {
  return request("/progress", {
    method: "PUT",
    token,
    body: { progress },
  });
}

