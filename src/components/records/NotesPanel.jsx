import { seed } from "../../data.js";
import { joinMeta } from "../../lib/format.js";

export function NotesPanel() {
  return (
    <article className="glass-panel">
      <div className="section-heading">
        <h3>Notes</h3>
        <span>Timeline-style supporting context</span>
      </div>
      <div className="note-stack">
        {seed.notes.map((note) => (
          <div key={note.id} className="note-card">
            <strong>{note.entity}</strong>
            <p>{note.content}</p>
            <small>{joinMeta(note.author, note.createdAt)}</small>
          </div>
        ))}
      </div>
    </article>
  );
}
