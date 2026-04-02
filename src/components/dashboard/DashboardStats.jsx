import { dashboard } from "../../data.js";

export function DashboardStats() {
  const cards = [
    { label: "Total leads", value: dashboard.totalLeads, tone: "warm" },
    { label: "Active deals", value: dashboard.activeDeals, tone: "mint" },
    { label: "Won deals", value: dashboard.wonDeals, tone: "gold" },
    { label: "Overdue tasks", value: dashboard.overdueTasks, tone: "rose" }
  ];

  return (
    <div className="stats-grid">
      {cards.map((card) => (
        <article key={card.label} className={`stat-card ${card.tone}`}>
          <span>{card.label}</span>
          <strong>{card.value}</strong>
        </article>
      ))}
    </div>
  );
}
