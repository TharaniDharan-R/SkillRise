import { ArrowRight, CheckCircle2 } from "lucide-react";

export function DomainCard({ domain, selected, onClick, compact = false }) {
  const totalTopics = domain.curriculum.reduce(
    (sum, module) => sum + module.topics.length,
    0,
  );

  return (
    <button
      className={selected ? "domain-card selected" : "domain-card"}
      onClick={onClick}
      style={{ "--domain-color": domain.color, "--domain-accent": domain.accent }}
      type="button"
    >
      <span className="domain-status">{domain.status === "live" ? "Live" : "Starter"}</span>
      <div>
        <h3>{domain.name}</h3>
        <p>{domain.description}</p>
      </div>
      <div className="domain-meta">
        <span>{domain.curriculum.length} modules</span>
        <span>{totalTopics} topics</span>
      </div>
      {compact ? null : (
        <div className="domain-action">
          {selected ? <CheckCircle2 size={18} /> : <ArrowRight size={18} />}
          <span>{selected ? "Selected" : "Select domain"}</span>
        </div>
      )}
    </button>
  );
}
