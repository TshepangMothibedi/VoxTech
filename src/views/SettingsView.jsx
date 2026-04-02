import { StagesPanel } from "../components/settings/StagesPanel.jsx";
import { UsersPanel } from "../components/settings/UsersPanel.jsx";

export function SettingsView() {
  return (
    <section className="panel-section">
      <div className="two-column">
        <StagesPanel />
        <UsersPanel />
      </div>
    </section>
  );
}
