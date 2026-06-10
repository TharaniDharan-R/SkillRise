export function ProgressBar({ value }) {
  return (
    <div className="progress-track" aria-label={`Progress ${value}%`}>
      <div className="progress-fill" style={{ width: `${value}%` }} />
    </div>
  );
}
