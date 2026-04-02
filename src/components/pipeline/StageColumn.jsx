import { DealCard } from "./DealCard.jsx";

export function StageColumn({ stage, deals }) {
  return (
    <div className="kanban-column">
      <div className="kanban-header">
        <strong>{stage}</strong>
        <span>{deals.length}</span>
      </div>
      {deals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
}
