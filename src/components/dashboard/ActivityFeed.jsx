import { seed } from "../../data.js";
import { joinMeta } from "../../lib/format.js";

export function ActivityFeed() {
  return (
    <article className="glass-panel">
      <div className="section-heading">
        <h3>Recent activity</h3>
        <span>Generated from critical workflow events</span>
      </div>
      <div className="timeline">
        {seed.activities.map((activity) => (
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
  );
}
