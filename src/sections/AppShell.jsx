import { navItems } from "../config.js";
import { DashboardView } from "../views/DashboardView.jsx";
import { RecordsView } from "../views/RecordsView.jsx";
import { PipelineView } from "../views/PipelineView.jsx";
import { TasksView } from "../views/TasksView.jsx";
import { ReportsView } from "../views/ReportsView.jsx";
import { SettingsView } from "../views/SettingsView.jsx";
import { seed } from "../data.js";

function viewHeading(currentView) {
  return navItems.find((item) => item.id === currentView)?.label || "Dashboard";
}

function renderView(currentView) {
  switch (currentView) {
    case "leads":
      return (
        <RecordsView
          title="Leads in motion"
          records={seed.leads}
          columns={[
            { key: "company", label: "Company" },
            { key: "source", label: "Source" },
            { key: "status", label: "Status" },
            { key: "owner", label: "Owner" }
          ]}
          showValue
        />
      );
    case "companies":
      return (
        <RecordsView
          title="Company relationships"
          records={seed.companies}
          columns={[
            { key: "industry", label: "Industry" },
            { key: "website", label: "Website" },
            { key: "owner", label: "Owner" }
          ]}
        />
      );
    case "contacts":
      return (
        <RecordsView
          title="Primary contacts"
          records={seed.contacts}
          columns={[
            { key: "title", label: "Role" },
            { key: "company", label: "Company" },
            { key: "owner", label: "Owner" }
          ]}
        />
      );
    case "pipeline":
      return <PipelineView />;
    case "tasks":
      return <TasksView />;
    case "reports":
      return <ReportsView />;
    case "settings":
      return <SettingsView />;
    default:
      return <DashboardView />;
  }
}

export function AppShell({ currentUser, currentView, onChangeView, onLogout }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand-lockup">
            <div className="brand-mark">V</div>
            <div>
              <div className="brand-name">VoxTech</div>
              <div className="brand-sub">CRM Demo System</div>
            </div>
          </div>
          <nav className="nav-list">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${currentView === item.id ? "active" : ""}`}
                onClick={() => onChangeView(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="sidebar-footer glass-panel">
          <div className="status-dot"></div>
          <div>
            <strong>Demo Ready</strong>
            <p>Seeded records and live-style activity are loaded.</p>
          </div>
        </div>
      </aside>
      <main className="main-panel">
        <header className="topbar">
          <div>
            <div className="eyebrow">Active Workspace</div>
            <h2>{viewHeading(currentView)}</h2>
          </div>
          <div className="topbar-actions">
            <div className="user-chip">
              <span className="avatar">{currentUser.initials}</span>
              <span>
                <strong>{currentUser.name}</strong>
                <small>{currentUser.role}</small>
              </span>
            </div>
            <button className="ghost-button" onClick={onLogout}>Logout</button>
          </div>
        </header>
        <section className="content-grid">{renderView(currentView)}</section>
      </main>
    </div>
  );
}
