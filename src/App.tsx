import { useState } from 'react';
import { anemias } from './data/anemias';
import { AnemiaDetail } from './components/AnemiaDetail';
import { ClassificationTree } from './components/ClassificationTree';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(anemias[0].id);
  const selected = anemias.find((anemia) => anemia.id === selectedId) ?? null;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Anemia Map</h1>
      </header>
      <div className="app-body">
        <aside className="app-sidebar">
          <ClassificationTree selectedId={selectedId} onSelect={setSelectedId} />
        </aside>
        <main className="app-detail">
          {selected ? (
            <AnemiaDetail anemia={selected} />
          ) : (
            <p className="muted">Select an anemia from the tree.</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
