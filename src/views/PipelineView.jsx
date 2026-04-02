import { seed } from "../data.js";
import { StageColumn } from "../components/pipeline/StageColumn.jsx";

export function PipelineView() {
  const activeStages = ["Qualified", "Proposal", "Negotiation", "Won"];

  return (
    <section className="panel-section">
      <article className="glass-panel">
        <div className="section-heading">
          <div>
            <h3>Pipeline board</h3>
            <span>Closed-stage logic is represented by separate styling for won deals.</span>
          </div>
          <button className="primary-button">New deal</button>
        </div>
        <div className="kanban-grid">
          {activeStages.map((stage) => (
            <StageColumn
              key={stage}
              stage={stage}
              deals={seed.deals.filter((deal) => deal.stage === stage)}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
