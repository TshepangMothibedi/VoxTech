import { reports } from "../../data.js";

export function SourceMix() {
  return (
    <article className="glass-panel">
      <div className="section-heading">
        <h3>Lead source mix</h3>
        <span>Believable seeded distribution</span>
      </div>
      <div className="report-bars">
        {reports.map((item) => (
          <div key={item.label} className="report-row">
            <div>
              <strong>{item.label}</strong>
              <small>{item.value} leads</small>
            </div>
            <div className={`report-bar ${item.accent}`}>
              <span style={{ width: `${item.value * 2}%` }}></span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
