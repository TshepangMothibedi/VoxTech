import { TaskList } from "../components/tasks/TaskList.jsx";
import { TaskInsights } from "../components/tasks/TaskInsights.jsx";

export function TasksView() {
  return (
    <section className="panel-section">
      <div className="two-column">
        <TaskList />
        <TaskInsights />
      </div>
    </section>
  );
}
