import { TopicCard } from "../components/TopicCard";

export function Roadmap({ domains, progress, onOpenTopic, onToggleTopic }) {
  return (
    <div className="page-stack">
      <header className="page-header">
        <div>
          <p className="eyebrow">Basic to advanced</p>
          <h1>Learning roadmap</h1>
          <p>Open a topic to read the article, watch the video, inspect code, and practice.</p>
        </div>
      </header>

      {domains.map((domain) => (
        <section className="roadmap-domain" key={domain.id}>
          <div className="domain-title" style={{ "--domain-color": domain.color }}>
            <span>{domain.shortName}</span>
            <div>
              <h2>{domain.name}</h2>
              <p>{domain.description}</p>
            </div>
          </div>

          <div className="module-list">
            {domain.curriculum.map((module) => (
              <article className="module-panel" key={module.id}>
                <div className="module-header">
                  <span>{module.level}</span>
                  <h3>{module.title}</h3>
                  <p>{module.summary}</p>
                </div>
                <div className="topic-list">
                  {module.topics.map((topic) => (
                    <TopicCard
                      completed={Boolean(progress.completedTopics?.[`${domain.id}:${topic.id}`])}
                      domain={domain}
                      key={topic.id}
                      module={module}
                      onOpen={onOpenTopic}
                      onToggle={() => onToggleTopic(domain.id, topic.id)}
                      topic={topic}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
