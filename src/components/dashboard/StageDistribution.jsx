import { pipelineStages } from "../../data.js";
import { currency } from "../../lib/format.js";

export function StageDistribution() {
  return (
    <article className="glass-panel">
      <div className="section-heading">
        <h3>Pipeline stage distribution</h3>
        <span>Role-aware summary</span>
      </div>
      <div className="stage-list">
        {pipelineStages.map((stage) => (
          <div key={stage.name} className="stage-row">
            <div>
              <strong>{stage.name}</strong>
              <small>{stage.count} deals</small>
            </div>
            <div className="stage-bar">
              <span style={{ width: `${Math.min(stage.count * 12, 100)}%` }}></span>
            </div>
            <strong>{currency.format(stage.value)}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}
