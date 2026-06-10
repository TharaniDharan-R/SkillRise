import { CheckCircle2, Circle, Code2, FileText, PlayCircle } from "lucide-react";

export function TopicCard({ completed, domain, module, topic, onOpen, onToggle }) {
  return (
    <article className={completed ? "topic-card complete" : "topic-card"}>
      <button className="topic-check" onClick={onToggle} type="button">
        {completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
      </button>

      <button
        className="topic-main"
        onClick={() => onOpen({ domain, module, topic })}
        type="button"
      >
        <span className="topic-level">{module.level}</span>
        <h4>{topic.title}</h4>
        <p>{topic.goal}</p>
        <div className="topic-tools">
          <span>
            <FileText size={14} />
            Article
          </span>
          <span>
            <PlayCircle size={14} />
            Video
          </span>
          <span>
            <Code2 size={14} />
            Code
          </span>
        </div>
      </button>
    </article>
  );
}
