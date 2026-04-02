import { dashboard } from "../../data.js";
import { currency } from "../../lib/format.js";

export function DashboardHero() {
  return (
    <div className="hero-panel glass-panel">
      <div>
        <div className="eyebrow">Executive Summary</div>
        <h3>Structured revenue operations, staged for live demos.</h3>
        <p>
          The dashboard combines seeded pipeline data, follow-up discipline, and recent activity so the
          first walkthrough already feels operational rather than empty.
        </p>
      </div>
      <div className="hero-stat">
        <span>Pipeline value</span>
        <strong>{currency.format(dashboard.pipelineValue)}</strong>
        <small>{dashboard.conversionRate}% lead-to-deal conversion</small>
      </div>
    </div>
  );
}
