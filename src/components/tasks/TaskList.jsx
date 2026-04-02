import { seed } from "../../data.js";
import { formatDate } from "../../lib/format.js";

export function TaskList() {
  return (
    <article className="glass-panel">
      <div className="section-heading">
        <h3>Upcoming and overdue work</h3>
        <span>Priorities, due dates, and linked entities remain visible.</span>
      </div>
      <div className="task-list">
        {seed.tasks.map((task) => (
          <div key={task.id} className="task-row">
            <div>
              <strong>{task.title}</strong>
              <p>{task.entity}</p>
            </div>
            <div className="task-tags">
              <span className="tag">{task.priority}</span>
              <span className={`tag ${task.status === "Overdue" ? "danger" : ""}`}>{task.status}</span>
            </div>
            <small>{formatDate(task.dueDate)}</small>
          </div>
        ))}
      </div>
    </article>
  );
}
