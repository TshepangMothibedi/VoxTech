import { currency } from "../../lib/format.js";

export function ReportSummary() {
  return (
    <article className="glass-panel">
      <div className="section-heading">
        <h3>Report readiness</h3>
        <span>MVP reporting slice</span>
      </div>
      <div className="insight-stack">
        <div className="insight-card">
          <span>Win / loss summary</span>
          <strong>7 won / 3 lost</strong>
        </div>
        <div className="insight-card">
          <span>Sales value by month</span>
          <strong>{currency.format(418000)}</strong>
        </div>
        <div className="insight-card">
          <span>Dashboard aggregation</span>
          <strong>Operational</strong>
        </div>
      </div>
    </article>
  );
}
