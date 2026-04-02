import { DashboardHero } from "../components/dashboard/DashboardHero.jsx";
import { DashboardStats } from "../components/dashboard/DashboardStats.jsx";
import { StageDistribution } from "../components/dashboard/StageDistribution.jsx";
import { ActivityFeed } from "../components/dashboard/ActivityFeed.jsx";

export function DashboardView() {
  return (
    <section className="panel-section">
      <DashboardHero />
      <DashboardStats />
      <div className="two-column">
        <StageDistribution />
        <ActivityFeed />
      </div>
    </section>
  );
}
