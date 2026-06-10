import { useMemo, useState } from "react";
import { BookOpen, LayoutDashboard, LogOut, Map, Trophy } from "lucide-react";
import { Dashboard } from "./pages/Dashboard";
import { Register } from "./pages/Register";
import { Roadmap } from "./pages/Roadmap";
import { Achievements } from "./pages/Achievements";
import { TopicDetail } from "./pages/TopicDetail";
import { domains } from "./data/domains";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { loginUser, registerUser, saveProgress } from "./api/client";
import { createInitialProgress } from "./utils/progress";
import "./styles/app.css";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "roadmap", label: "Roadmap", icon: Map },
  { id: "achievements", label: "Achievements", icon: Trophy },
];

export default function App() {
  const [user, setUser] = useLocalStorage("skillrise:user", null);
  const [token, setToken] = useLocalStorage("skillrise:token", "");
  const [progress, setProgress] = useLocalStorage(
    "skillrise:progress",
    createInitialProgress(),
  );
  const [activePage, setActivePage] = useState("dashboard");
  const [activeTopic, setActiveTopic] = useState(null);

  const selectedDomains = useMemo(() => {
    if (!user) return [];
    return domains.filter((domain) => user.domainIds.includes(domain.id));
  }, [user]);

  async function handleRegister(profile) {
    const result = await registerUser(profile);
    setToken(result.token);
    setUser(result.user);
    setProgress(result.progress);
    setActivePage("dashboard");
  }

  async function handleLogin(credentials) {
    const result = await loginUser(credentials);
    setToken(result.token);
    setUser(result.user);
    setProgress(result.progress);
    setActivePage("dashboard");
  }

  function handleLogout() {
    setUser(null);
    setToken("");
    setActiveTopic(null);
    setActivePage("dashboard");
  }

  function handleToggleTopic(domainId, topicId) {
    const completedTopics = progress.completedTopics ?? {};
    const key = `${domainId}:${topicId}`;
    const isComplete = Boolean(completedTopics[key]);
    const nextProgress = {
      ...progress,
      xp: Math.max(0, progress.xp + (isComplete ? -35 : 35)),
      completedTopics: {
        ...completedTopics,
        [key]: !isComplete,
      },
    };

    setProgress(nextProgress);
    if (token) {
      saveProgress(token, nextProgress).catch((error) => {
        console.error(error);
      });
    }
  }

  if (!user) {
    return <Register domains={domains} onLogin={handleLogin} onRegister={handleRegister} />;
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">
            <BookOpen size={20} />
          </span>
          <span>SkillRise</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                className={activePage === item.id ? "nav-item active" : "nav-item"}
                key={item.id}
                onClick={() => {
                  setActiveTopic(null);
                  setActivePage(item.id);
                }}
                type="button"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-profile">
          <strong>{user.name}</strong>
          <span>{selectedDomains.length} learning domains</span>
          <button className="ghost-button" onClick={handleLogout} type="button">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      <main className="workspace">
        {activeTopic ? (
          <TopicDetail
            completed={Boolean(
              progress.completedTopics?.[`${activeTopic.domain.id}:${activeTopic.topic.id}`],
            )}
            domain={activeTopic.domain}
            module={activeTopic.module}
            onBack={() => setActiveTopic(null)}
            onToggleComplete={() =>
              handleToggleTopic(activeTopic.domain.id, activeTopic.topic.id)
            }
            topic={activeTopic.topic}
          />
        ) : null}

        {!activeTopic && activePage === "dashboard" ? (
          <Dashboard
            domains={selectedDomains}
            progress={progress}
            user={user}
            onOpenRoadmap={() => setActivePage("roadmap")}
            onOpenTopic={setActiveTopic}
          />
        ) : null}

        {!activeTopic && activePage === "roadmap" ? (
          <Roadmap
            domains={selectedDomains}
            progress={progress}
            onOpenTopic={setActiveTopic}
            onToggleTopic={handleToggleTopic}
          />
        ) : null}

        {!activeTopic && activePage === "achievements" ? (
          <Achievements progress={progress} domains={selectedDomains} />
        ) : null}
      </main>
    </div>
  );
}
