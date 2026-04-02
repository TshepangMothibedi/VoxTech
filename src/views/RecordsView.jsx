import { RecordTablePanel } from "../components/records/RecordTablePanel.jsx";
import { NotesPanel } from "../components/records/NotesPanel.jsx";

export function RecordsView({ title, records, columns, showValue = false }) {
  return (
    <section className="panel-section">
      <RecordTablePanel title={title} records={records} columns={columns} showValue={showValue} />
      <NotesPanel />
    </section>
  );
}
