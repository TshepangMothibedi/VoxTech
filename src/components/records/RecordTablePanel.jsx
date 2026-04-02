import { currency } from "../../lib/format.js";

export function RecordTablePanel({ title, records, columns, showValue }) {
  return (
    <article className="glass-panel">
      <div className="section-heading">
        <div>
          <h3>{title}</h3>
          <span>Search, filters, and CRUD flows are represented in this seeded slice.</span>
        </div>
        <button className="primary-button">Create record</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              {columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
              {showValue ? <th>Value</th> : null}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>
                  <strong>{record.name}</strong>
                  <small>{record.id}</small>
                </td>
                {columns.map((column) => (
                  <td key={column.key}>{record[column.key]}</td>
                ))}
                {showValue ? <td>{currency.format(record.value)}</td> : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
