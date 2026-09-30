import type { LabRow } from '../types/anemia';

const DIRECTION_GLYPH: Record<NonNullable<LabRow['direction']>, string> = {
  up: '\u2191',
  down: '\u2193',
  normal: 'normal',
  variable: 'variable',
  na: 'n/a',
};

export function LabTable({ rows }: { rows: LabRow[] }) {
  return (
    <table className="lab-table">
      <tbody>
        {rows.map((row, index) => (
          <tr key={`${row.label}-${index}`}>
            <th scope="row" className="lab-label">
              {row.label}
            </th>
            <td className="lab-value">
              <span>{row.value}</span>
              {row.direction ? (
                <span className={`lab-direction lab-direction-${row.direction}`}>
                  {DIRECTION_GLYPH[row.direction]}
                </span>
              ) : null}
              {row.note ? <span className="lab-note">{row.note}</span> : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
