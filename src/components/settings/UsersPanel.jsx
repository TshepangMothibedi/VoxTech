import { seed } from "../../data.js";
import { joinMeta } from "../../lib/format.js";

export function UsersPanel() {
  return (
    <article className="glass-panel">
      <div className="section-heading">
        <h3>Users</h3>
        <span>Mock administration and role display</span>
      </div>
      <div className="user-list">
        {seed.users.map((user) => (
          <div key={user.id} className="user-row">
            <span className="avatar">{user.initials}</span>
            <div>
              <strong>{user.name}</strong>
              <small>{joinMeta(user.email, user.role)}</small>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
