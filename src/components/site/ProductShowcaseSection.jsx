import { dashboard, pipelineStages, seed } from "../../data.js";
import { currency, joinMeta } from "../../lib/format.js";

export function ProductShowcaseSection() {
  return (
    <section id="product" className="website-section">
      <div className="section-intro split">
        <div>
          <div className="eyebrow">Featured Build</div>
          <h2>Startup CRM demo system</h2>
        </div>
        <p>
          A production-minded showcase platform designed to prove how VoxTech approaches business software:
          structured workflows, premium visual quality, and believable operational data.
        </p>
      </div>
      <div className="showcase-shell glass-panel">
        <div className="showcase-sidebar">
          <strong>Modules</strong>
          <span>Dashboard</span>
          <span>Leads</span>
          <span>Companies</span>
          <span>Deals</span>
          <span>Tasks</span>
          <span>Reports</span>
        </div>
        <div className="showcase-main">
          <div className="showcase-stats">
            <article className="stat-card warm">
              <span>Total leads</span>
              <strong>{dashboard.totalLeads}</strong>
            </article>
            <article className="stat-card mint">
              <span>Active deals</span>
              <strong>{dashboard.activeDeals}</strong>
            </article>
            <article className="stat-card gold">
              <span>Won deals</span>
              <strong>{dashboard.wonDeals}</strong>
            </article>
          </div>
          <div className="two-column">
            <article className="glass-panel">
              <div className="section-heading">
                <h3>Pipeline stage distribution</h3>
                <span>{currency.format(dashboard.pipelineValue)}</span>
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
            <article className="glass-panel">
              <div className="section-heading">
                <h3>Recent activity</h3>
                <span>Believable demo data</span>
              </div>
              <div className="timeline">
                {seed.activities.slice(0, 3).map((activity) => (
                  <div key={activity.id} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div>
                      <strong>{activity.type}</strong>
                      <p>{activity.description}</p>
                      <small>{joinMeta(activity.entity, activity.when)}</small>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
