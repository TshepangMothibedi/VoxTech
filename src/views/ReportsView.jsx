import { SourceMix } from "../components/reports/SourceMix.jsx";
import { ReportSummary } from "../components/reports/ReportSummary.jsx";

export function ReportsView() {
  return (
    <section className="panel-section">
      <div className="two-column">
        <SourceMix />
        <ReportSummary />
      </div>
    </section>
  );
}
