import { anemias } from './data/anemias';
import { branchGroups, getAnemiasForBranch } from './data/classificationTree';

function App() {
  return (
    <>
      <h1>Anemia Map</h1>
      <ul>
        {branchGroups.map((group) => (
          <li key={group.key}>
            <strong>{group.label}</strong>
            <ul>
              {group.branches.map((branch) => {
                const matches = getAnemiasForBranch(branch.key)
                return (
                  <li key={branch.key}>
                    {branch.label} ({matches.length})
                    <ul>
                      {matches.map((anemia) => (
                        <li key={anemia.id}>{anemia.name}</li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
      <p>Total anemias: {anemias.length}</p>
    </>
  )
}

export default App
