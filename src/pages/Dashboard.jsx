import { ArrowRight, BookOpen, Clock, Flame, Target } from "lucide-react";
import { DomainCard } from "../components/DomainCard";
import { ProgressBar } from "../components/ProgressBar";
import { countCompleted, countTopics, getProgressPercent } from "../utils/progress";

export function Dashboard({ domains, progress, user, onOpenRoadmap, onOpenTopic }) {
  const totalTopics = countTopics(domains);
  const completed = countCompleted(progress, domains);
  const percent = getProgressPercent(progress, domains);
  const firstTopic = domains[0]?.curriculum[0]?.topics[0];

  return (
    <div className="page-stack">
      <header className="page-header">
        <div>
          <p className="eyebrow">Welcome back, {user.name}</p>
          <h1>Your learning dashboard</h1>
          <p>{user.goal || "Build steady progress from basics to advanced level."}</p>
        </div>
        <button className="primary-button" onClick={onOpenRoadmap} type="button">
          Open roadmap
          <ArrowRight size={18} />
        </button>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <BookOpen size={22} />
          <strong>{totalTopics}</strong>
          <span>Total topics</span>
        </div>
        <div className="stat-card">
          <Target size={22} />
          <strong>{completed}</strong>
          <span>Completed</span>
        </div>
        <div className="stat-card">
          <Flame size={22} />
          <strong>{progress.xp}</strong>
          <span>XP earned</span>
        </div>
        <div className="stat-card">
          <Clock size={22} />
          <strong>{percent}%</strong>
          <span>Overall progress</span>
        </div>
      </section>

      <section className="content-panel">
        <div className="section-heading">
          <div>
            <h2>Current progress</h2>
            <p>{completed} of {totalTopics} topics completed</p>
          </div>
          <strong>{percent}%</strong>
        </div>
        <ProgressBar value={percent} />
      </section>

      <section>
        <div className="section-heading">
          <div>
            <h2>Your domains</h2>
            <p>Each domain has modules, topics, articles, videos, code, and practice tasks.</p>
          </div>
        </div>
        <div className="domain-grid compact">
          {domains.map((domain) => (
            <DomainCard compact domain={domain} key={domain.id} selected />
          ))}
        </div>
      </section>

      {firstTopic ? (
        <section className="content-panel next-panel">
          <div>
            <span className="eyebrow">Recommended next</span>
            <h2>{firstTopic.title}</h2>
            <p>{firstTopic.goal}</p>
          </div>
          <button
            className="secondary-button"
            onClick={() =>
              onOpenTopic({
                domain: domains[0],
                module: domains[0].curriculum[0],
                topic: firstTopic,
              })
            }
            type="button"
          >
            Continue
            <ArrowRight size={16} />
          </button>
        </section>
      ) : null}
    </div>
  );
}
