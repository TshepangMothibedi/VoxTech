export function StagesPanel() {
  const stageRows = [
    { name: "New", order: 1, closed: "No" },
    { name: "Qualified", order: 3, closed: "No" },
    { name: "Negotiation", order: 5, closed: "No" },
    { name: "Won", order: 6, closed: "Yes" },
    { name: "Lost", order: 7, closed: "Yes" }
  ];

  return (
    <article className="glass-panel">
      <div className="section-heading">
        <h3>Pipeline stage settings</h3>
        <span>Foundational admin controls</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Sort order</th>
              <th>Closed</th>
            </tr>
          </thead>
          <tbody>
            {stageRows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.order}</td>
                <td>{row.closed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
