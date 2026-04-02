import { currency, formatDate } from "../../lib/format.js";

export function DealCard({ deal }) {
  return (
    <article className={`deal-card ${deal.status === "Won" ? "won" : ""}`}>
      <strong>{deal.title}</strong>
      <p>{deal.company}</p>
      <div className="deal-meta">
        <span>{currency.format(deal.value)}</span>
        <span>{deal.probability}%</span>
      </div>
      <small>Close {formatDate(deal.closeDate)}</small>
    </article>
  );
}
