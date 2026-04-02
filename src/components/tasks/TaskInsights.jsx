import { dashboard } from "../../data.js";

export function TaskInsights() {
  return (
    <article className="glass-panel">
      <div className="section-heading">
        <h3>Follow-up discipline</h3>
        <span>Manager-facing snapshot</span>
      </div>
      <div className="insight-stack">
        <div className="insight-card">
          <span>Average sales cycle</span>
          <strong>{dashboard.avgCycle} days</strong>
        </div>
        <div className="insight-card">
          <span>Tasks due this week</span>
          <strong>{dashboard.upcomingTasks}</strong>
        </div>
        <div className="insight-card">
          <span>Escalated follow-ups</span>
          <strong>{dashboard.overdueTasks}</strong>
        </div>
      </div>
    </article>
  );
}
