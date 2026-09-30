import { useState } from 'react';
import { anemias } from './data/anemias';
import { AnemiaDetail } from './components/AnemiaDetail';
import { ClassificationTree } from './components/ClassificationTree';
import { CompareTables } from './components/CompareTables';

type Tab = 'study' | 'compare';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(anemias[0].id);
  const [tab, setTab] = useState<Tab>('study');
  const [keyCluesMode, setKeyCluesMode] = useState(false);
  const selected = anemias.find((anemia) => anemia.id === selectedId) ?? null;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Anemia Map</h1>
        <label className="toggle">
          <input
            type="checkbox"
            checked={keyCluesMode}
            onChange={(event) => setKeyCluesMode(event.target.checked)}
          />
          <span>Key clues mode</span>
        </label>
      </header>

      <nav className="tabbar" aria-label="Views">
        <button
          type="button"
          className={`tab${tab === 'study' ? ' is-active' : ''}`}
          aria-current={tab === 'study' ? 'page' : undefined}
          onClick={() => setTab('study')}
        >
          Study
        </button>
        <button
          type="button"
          className={`tab${tab === 'compare' ? ' is-active' : ''}`}
          aria-current={tab === 'compare' ? 'page' : undefined}
          onClick={() => setTab('compare')}
        >
          Compare
        </button>
      </nav>

      <div className={`app-body${tab === 'compare' ? ' app-body--compare' : ''}`}>
        {tab === 'study' ? (
          <>
            <aside className="app-sidebar">
              <ClassificationTree selectedId={selectedId} onSelect={setSelectedId} />
            </aside>
            <main className="app-detail">
              {selected ? (
                <AnemiaDetail anemia={selected} keyCluesOnly={keyCluesMode} />
              ) : (
                <p className="muted">Select an anemia from the tree.</p>
              )}
            </main>
          </>
        ) : (
          <main className="app-compare">
            <CompareTables />
          </main>
        )}
      </div>

      <footer className="app-footer">
        {'Educational study tool \u2014 not medical advice.'}
      </footer>
    </div>
  );
}

export default App;
