import type { CSSProperties } from 'react';
import { branchGroups, getAnemiasForBranch } from '../data/classificationTree';

type ClassificationTreeProps = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function accentStyle(accentVar: string): CSSProperties {
  return { '--accent': `var(${accentVar})` } as CSSProperties;
}

export function ClassificationTree({ selectedId, onSelect }: ClassificationTreeProps) {
  return (
    <details className="tree-drawer" open>
      <summary className="tree-drawer-summary">Classification</summary>
      <nav className="tree" aria-label="Anemia classification">
        {branchGroups.map((group) => (
          <details
            key={group.key}
            className="tree-group"
            style={accentStyle(group.accentVar)}
            open
          >
            <summary className="tree-group-summary">{group.label}</summary>
            {group.branches.map((branch) => {
              const items = getAnemiasForBranch(branch.key);
              return (
                <div key={branch.key} className="tree-branch">
                  <h3 className="tree-branch-title">{branch.label}</h3>
                  {items.length === 0 ? (
                    <p className="tree-empty muted">None</p>
                  ) : (
                    <ul className="tree-list">
                      {items.map((anemia) => {
                        const isSelected = anemia.id === selectedId;
                        return (
                          <li key={anemia.id}>
                            <button
                              type="button"
                              className={`tree-item${isSelected ? ' is-selected' : ''}`}
                              aria-current={isSelected ? 'true' : undefined}
                              onClick={() => onSelect(anemia.id)}
                            >
                              {anemia.name}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </details>
        ))}
      </nav>
    </details>
  );
}
