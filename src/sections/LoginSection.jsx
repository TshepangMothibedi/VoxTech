import { dashboard, seed } from "../data.js";
import { currency } from "../lib/format.js";

export function LoginSection({ onSelectUser }) {
  return (
    <main className="login-shell">
      <section className="login-card glass-panel">
        <div className="eyebrow">VoxTech Startup CRM Demo</div>
        <h1>Operational clarity for startup sales teams.</h1>
        <p className="intro">
          This React implementation is split into reusable components with seeded CRM data,
          mock role-based access, dashboard metrics, pipeline visibility, tasks, notes, and reports.
        </p>
        <div className="demo-users">
          {seed.users.map((user) => (
            <button
              key={user.id}
              className="demo-user"
              onClick={() => onSelectUser(user.id)}
            >
              <span className="avatar">{user.initials}</span>
              <span>
                <strong>{user.name}</strong>
                <small>{user.role}</small>
              </span>
            </button>
          ))}
        </div>
        <div className="login-hint">
          Demo access is instant. Pick a user profile to enter the app.
        </div>
      </section>
      <section className="login-aside">
        <div className="aside-panel">
          <div className="metric-slab">
            <span>Pipeline under management</span>
            <strong>{currency.format(dashboard.pipelineValue)}</strong>
          </div>
          <div className="metric-slab">
            <span>Current conversion rate</span>
            <strong>{dashboard.conversionRate}%</strong>
          </div>
          <div className="metric-slab">
            <span>Upcoming follow-ups</span>
            <strong>{dashboard.upcomingTasks}</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
