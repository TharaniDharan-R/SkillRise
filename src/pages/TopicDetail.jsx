import { ArrowLeft, CheckCircle2, Circle, Code2, ExternalLink, FileText, PlayCircle } from "lucide-react";

export function TopicDetail({ completed, domain, module, topic, onBack, onToggleComplete }) {
  return (
    <article className="topic-detail">
      <button className="back-button" onClick={onBack} type="button">
        <ArrowLeft size={18} />
        Back to roadmap
      </button>

      <header className="topic-detail-header" style={{ "--domain-color": domain.color }}>
        <span>{domain.name} / {module.level}</span>
        <h1>{topic.title}</h1>
        <p>{topic.goal}</p>
        <button className="primary-button" onClick={onToggleComplete} type="button">
          {completed ? <CheckCircle2 size={18} /> : <Circle size={18} />}
          {completed ? "Completed" : "Mark complete"}
        </button>
      </header>

      <div className="detail-grid">
        <section className="content-panel">
          <h2>
            <FileText size={20} />
            Article
          </h2>
          <p>{topic.article}</p>
        </section>

        <section className="content-panel">
          <h2>
            <PlayCircle size={20} />
            Video
          </h2>
          <p>Use this video as the guided lesson for the topic.</p>
          <a className="resource-link" href={topic.videoUrl} rel="noreferrer" target="_blank">
            Watch lesson
            <ExternalLink size={16} />
          </a>
        </section>

        <section className="content-panel code-panel">
          <h2>
            <Code2 size={20} />
            Code example
          </h2>
          <pre>
            <code>{topic.code}</code>
          </pre>
        </section>

        <section className="content-panel practice-panel">
          <h2>Practice tasks</h2>
          <ul>
            {topic.practice.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
