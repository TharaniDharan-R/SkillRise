import { javaCurriculum } from "./javaCurriculum";

const starterCurriculum = {
  frontend: [
    {
      id: "frontend-foundations",
      title: "Frontend Foundations",
      level: "Basic",
      summary: "Start with the browser, semantic HTML, CSS layout, and JavaScript basics.",
      topics: [
        {
          id: "html-semantics",
          title: "Semantic HTML",
          goal: "Build accessible page structure with meaningful tags.",
          article: "Use header, nav, main, section, article, aside, and footer to describe the page instead of relying only on divs.",
          videoUrl: "https://www.youtube.com/watch?v=kGW8Al_cga4",
          code: `<main>
  <section aria-labelledby="courses">
    <h1 id="courses">Available Courses</h1>
    <article>
      <h2>React Basics</h2>
      <p>Learn components and props.</p>
    </article>
  </section>
</main>`,
          practice: ["Convert a div-heavy page to semantic HTML", "Add labels and alt text to a form"],
        },
        {
          id: "css-layout",
          title: "CSS Layout",
          goal: "Create responsive layouts with flexbox and grid.",
          article: "Flexbox is ideal for one-dimensional alignment. Grid is better for two-dimensional layouts such as dashboards and galleries.",
          videoUrl: "https://www.youtube.com/watch?v=phWxA89Dy94",
          code: `.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}`,
          practice: ["Create a responsive card grid", "Build a sticky sidebar layout"],
        },
      ],
    },
    {
      id: "frontend-react",
      title: "React Application Development",
      level: "Intermediate",
      summary: "Move from static pages to component-driven apps.",
      topics: [
        {
          id: "react-state",
          title: "React State",
          goal: "Model interactive UI with useState and derived state.",
          article: "Keep state minimal. Store the source of truth and calculate the rest during render.",
          videoUrl: "https://www.youtube.com/watch?v=SqcY0GlETPk",
          code: `const [tasks, setTasks] = useState([]);
const completed = tasks.filter((task) => task.done).length;`,
          practice: ["Build a todo list", "Add filters for completed and pending tasks"],
        },
        {
          id: "forms-validation",
          title: "Forms and Validation",
          goal: "Collect user input safely and show helpful errors.",
          article: "Controlled inputs keep form values in React state, making validation and submission predictable.",
          videoUrl: "https://www.youtube.com/watch?v=fNcJuPIZ2WE",
          code: `function handleSubmit(event) {
  event.preventDefault();
  if (!email.includes("@")) setError("Enter a valid email.");
}`,
          practice: ["Create a register form", "Disable submit until required fields are valid"],
        },
      ],
    },
  ],
  backend: [
    {
      id: "backend-basics",
      title: "Backend Foundations",
      level: "Basic",
      summary: "Understand servers, APIs, requests, responses, and databases.",
      topics: [
        {
          id: "rest-api",
          title: "REST APIs",
          goal: "Design predictable endpoints with HTTP methods.",
          article: "REST APIs use resources and methods. GET reads, POST creates, PUT/PATCH updates, and DELETE removes.",
          videoUrl: "https://www.youtube.com/watch?v=-MTSQjw5DrM",
          code: `app.get("/api/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});`,
          practice: ["Create CRUD endpoints for courses", "Return correct status codes"],
        },
        {
          id: "database-modeling",
          title: "Database Modeling",
          goal: "Design tables or collections around real product data.",
          article: "Good data models start from user actions. Define entities, relationships, constraints, and indexes.",
          videoUrl: "https://www.youtube.com/watch?v=ztHopE5Wnpc",
          code: `const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  enrolledDomainIds: [String],
});`,
          practice: ["Model users and enrollments", "Add a unique email constraint"],
        },
      ],
    },
    {
      id: "backend-security",
      title: "Authentication and Security",
      level: "Advanced",
      summary: "Protect accounts, data, and API routes.",
      topics: [
        {
          id: "jwt-auth",
          title: "JWT Authentication",
          goal: "Issue tokens and protect private routes.",
          article: "JWTs are signed tokens. Store only necessary claims and validate signatures on protected routes.",
          videoUrl: "https://www.youtube.com/watch?v=mbsmsi7l3r4",
          code: `function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.sendStatus(401);
  req.user = jwt.verify(token, process.env.JWT_SECRET);
  next();
}`,
          practice: ["Add login and token issue route", "Protect a profile endpoint"],
        },
      ],
    },
  ],
  fullstack: [
    {
      id: "fullstack-mern",
      title: "Fullstack Product Flow",
      level: "Intermediate",
      summary: "Connect React screens to APIs and persist real data.",
      topics: [
        {
          id: "api-integration",
          title: "Frontend to API Integration",
          goal: "Fetch backend data and handle loading, success, and error states.",
          article: "A resilient UI treats network calls as states: idle, loading, success, empty, and error.",
          videoUrl: "https://www.youtube.com/watch?v=cuEtnrL9-H0",
          code: `const response = await fetch("/api/roadmap");
if (!response.ok) throw new Error("Unable to load roadmap");
const roadmap = await response.json();`,
          practice: ["Load courses from an API", "Show retry UI when requests fail"],
        },
      ],
    },
  ],
  cloud: [
    {
      id: "cloud-basics",
      title: "Cloud Foundations",
      level: "Basic",
      summary: "Learn compute, storage, networking, deployment, and monitoring.",
      topics: [
        {
          id: "deploy-static-app",
          title: "Deploy a Static App",
          goal: "Build and host a frontend on a cloud platform.",
          article: "Static hosting serves built HTML, CSS, and JS from a CDN for speed and low cost.",
          videoUrl: "https://www.youtube.com/watch?v=ulprqHHWlng",
          code: `npm run build
# upload the dist folder to your hosting provider`,
          practice: ["Deploy a Vite build", "Configure a custom domain"],
        },
      ],
    },
  ],
  ai: [
    {
      id: "ai-foundations",
      title: "AI Engineering Foundations",
      level: "Basic",
      summary: "Learn Python, data handling, model thinking, and LLM app patterns.",
      topics: [
        {
          id: "prompt-design",
          title: "Prompt Design",
          goal: "Write precise instructions for useful model output.",
          article: "Strong prompts include role, task, context, constraints, examples, and output format.",
          videoUrl: "https://www.youtube.com/watch?v=jC4v5AS4RIM",
          code: `const prompt = \`
You are a tutor. Explain closures to a beginner.
Return: definition, example, practice question.
\`;`,
          practice: ["Write a tutor prompt", "Compare vague and structured prompts"],
        },
      ],
    },
  ],
  devops: [
    {
      id: "devops-foundations",
      title: "DevOps Foundations",
      level: "Basic",
      summary: "Automate builds, containers, deployments, and observability.",
      topics: [
        {
          id: "docker-basics",
          title: "Docker Basics",
          goal: "Package an app with its runtime dependencies.",
          article: "Docker images are immutable app packages. Containers are running instances of those images.",
          videoUrl: "https://www.youtube.com/watch?v=pg19Z8LL06w",
          code: `FROM node:22-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "run", "dev"]`,
          practice: ["Dockerize a Node app", "Add a .dockerignore file"],
        },
      ],
    },
  ],
  mobile: [
    {
      id: "mobile-foundations",
      title: "Mobile App Foundations",
      level: "Basic",
      summary: "Learn screens, navigation, device APIs, and offline-friendly patterns.",
      topics: [
        {
          id: "react-native-screen",
          title: "React Native Screens",
          goal: "Build reusable mobile screens with native components.",
          article: "React Native uses components such as View, Text, Pressable, and FlatList instead of browser tags.",
          videoUrl: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
          code: `function CourseCard({ title }) {
  return (
    <Pressable>
      <Text>{title}</Text>
    </Pressable>
  );
}`,
          practice: ["Create a profile screen", "Render a course list with FlatList"],
        },
      ],
    },
  ],
  security: [
    {
      id: "security-foundations",
      title: "Security Foundations",
      level: "Basic",
      summary: "Learn secure coding, web attacks, threat modeling, and defensive habits.",
      topics: [
        {
          id: "owasp-top-10",
          title: "OWASP Top 10",
          goal: "Recognize common web application vulnerabilities.",
          article: "OWASP Top 10 includes risks such as broken access control, injection, insecure design, and security misconfiguration.",
          videoUrl: "https://www.youtube.com/watch?v=RWHK2_6JjHk",
          code: `// Parameterized queries help prevent SQL injection.
db.query("SELECT * FROM users WHERE email = ?", [email]);`,
          practice: ["Audit a login form", "List access-control checks for a dashboard"],
        },
      ],
    },
  ],
};

export const domains = [
  {
    id: "java",
    name: "Java Development",
    shortName: "Java",
    status: "live",
    color: "#f59e0b",
    accent: "#fff7ed",
    description: "Complete Java roadmap from basics to advanced OOP, collections, Java 8, and DSA.",
    curriculum: javaCurriculum,
  },
  {
    id: "frontend",
    name: "Frontend Development",
    shortName: "Frontend",
    status: "starter",
    color: "#2563eb",
    accent: "#eff6ff",
    description: "HTML, CSS, JavaScript, React, design systems, testing, and production UI patterns.",
    curriculum: starterCurriculum.frontend,
  },
  {
    id: "backend",
    name: "Backend Development",
    shortName: "Backend",
    status: "starter",
    color: "#059669",
    accent: "#ecfdf5",
    description: "APIs, databases, authentication, security, caching, queues, and scalable services.",
    curriculum: starterCurriculum.backend,
  },
  {
    id: "fullstack",
    name: "Fullstack Development",
    shortName: "Fullstack",
    status: "starter",
    color: "#7c3aed",
    accent: "#f5f3ff",
    description: "End-to-end product development with frontend, backend, deployment, and testing.",
    curriculum: starterCurriculum.fullstack,
  },
  {
    id: "cloud",
    name: "Cloud Development",
    shortName: "Cloud",
    status: "starter",
    color: "#0891b2",
    accent: "#ecfeff",
    description: "Cloud compute, storage, networking, deployment, automation, and monitoring.",
    curriculum: starterCurriculum.cloud,
  },
  {
    id: "ai",
    name: "AI Engineering",
    shortName: "AI",
    status: "starter",
    color: "#db2777",
    accent: "#fdf2f8",
    description: "Python, ML basics, LLM apps, prompt design, evaluation, and model deployment.",
    curriculum: starterCurriculum.ai,
  },
  {
    id: "devops",
    name: "DevOps Engineering",
    shortName: "DevOps",
    status: "starter",
    color: "#475569",
    accent: "#f8fafc",
    description: "Linux, Docker, CI/CD, infrastructure, monitoring, and release automation.",
    curriculum: starterCurriculum.devops,
  },
  {
    id: "mobile",
    name: "Mobile Development",
    shortName: "Mobile",
    status: "starter",
    color: "#ea580c",
    accent: "#fff7ed",
    description: "React Native, Flutter concepts, navigation, storage, APIs, and app publishing.",
    curriculum: starterCurriculum.mobile,
  },
  {
    id: "security",
    name: "Cybersecurity",
    shortName: "Security",
    status: "starter",
    color: "#dc2626",
    accent: "#fef2f2",
    description: "Secure coding, OWASP, network basics, threat modeling, and defensive testing.",
    curriculum: starterCurriculum.security,
  },
];
