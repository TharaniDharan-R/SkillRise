import { Award, CheckCircle2, Flame, Trophy } from "lucide-react";
import { countCompleted, countTopics, getProgressPercent } from "../utils/progress";

export function Achievements({ domains, progress }) {
  const total = countTopics(domains);
  const completed = countCompleted(progress, domains);
  const percent = getProgressPercent(progress, domains);

  const achievements = [
    {
      title: "First Step",
      description: "Complete your first topic.",
      earned: completed >= 1,
      icon: CheckCircle2,
    },
    {
      title: "Focused Learner",
      description: "Earn 100 XP.",
      earned: progress.xp >= 100,
      icon: Flame,
    },
    {
      title: "Half Roadmap",
      description: "Complete 50% of selected topics.",
      earned: percent >= 50,
      icon: Trophy,
    },
    {
      title: "Domain Finisher",
      description: "Complete every selected topic.",
      earned: total > 0 && completed === total,
      icon: Award,
    },
  ];

  return (
    <div className="page-stack">
      <header className="page-header">
        <div>
          <p className="eyebrow">Achievements</p>
          <h1>Badges and milestones</h1>
          <p>Progress becomes visible as students complete topics and build learning habits.</p>
        </div>
      </header>

      <section className="achievement-grid">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <article
              className={achievement.earned ? "achievement-card earned" : "achievement-card"}
              key={achievement.title}
            >
              <Icon size={30} />
              <h2>{achievement.title}</h2>
              <p>{achievement.description}</p>
              <span>{achievement.earned ? "Earned" : "Locked"}</span>
            </article>
          );
        })}
      </section>
    </div>
  );
}
