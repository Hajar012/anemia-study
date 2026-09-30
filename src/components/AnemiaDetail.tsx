import type { CSSProperties, ReactNode } from 'react';
import type { Anemia, BranchKey, LabRow } from '../types/anemia';
import { branchGroups } from '../data/classificationTree';
import { CollapsibleSection } from './CollapsibleSection';
import { KeyCluesBox } from './KeyCluesBox';
import { LabTable } from './LabTable';

const NOT_SPECIFIED = 'Not specified by source.';

const branchMeta = new Map<BranchKey, { label: string; accentVar: string }>();
for (const group of branchGroups) {
  for (const branch of group.branches) {
    branchMeta.set(branch.key, { label: branch.label, accentVar: group.accentVar });
  }
}

function isPlaceholder(value: string): boolean {
  return value.trim() === NOT_SPECIFIED;
}

function listHasContent(values: string[]): boolean {
  return values.length > 0 && !(values.length === 1 && isPlaceholder(values[0]));
}

function rowsHaveContent(rows: LabRow[]): boolean {
  return (
    rows.length > 0 &&
    !(rows.length === 1 && isPlaceholder(rows[0].label) && isPlaceholder(rows[0].value))
  );
}

function Muted({ children = NOT_SPECIFIED }: { children?: ReactNode }) {
  return <p className="muted">{children}</p>;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="detail-section">
      <h3 className="detail-section-title">{title}</h3>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function RichText({ text }: { text: string }) {
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];
  let key = 0;

  const flush = () => {
    if (bullets.length > 0) {
      blocks.push(<Bullets key={`ul-${key++}`} items={bullets} />);
      bullets = [];
    }
  };

  for (const line of text.split('\n')) {
    if (line.startsWith('- ')) {
      bullets.push(line.slice(2));
    } else {
      flush();
      if (line.trim().length > 0) {
        blocks.push(<p key={`p-${key++}`}>{line}</p>);
      }
    }
  }
  flush();

  return <>{blocks}</>;
}

function accentStyle(accentVar: string): CSSProperties {
  return { '--accent': `var(${accentVar})` } as CSSProperties;
}

type AnemiaDetailProps = {
  anemia: Anemia;
  keyCluesOnly?: boolean;
};

export function AnemiaDetail({ anemia, keyCluesOnly = false }: AnemiaDetailProps) {
  const { clinicalFeatures } = anemia;
  const complications = clinicalFeatures.complications ?? [];

  if (keyCluesOnly) {
    return (
      <article className="detail-inner">
        <header className="detail-header">
          <h2 className="detail-name">{anemia.name}</h2>
          <p className="detail-def">{anemia.definition}</p>
        </header>
        <Section title="Key clues">
          <KeyCluesBox
            clues={listHasContent(anemia.keyClues) ? anemia.keyClues : [NOT_SPECIFIED]}
          />
        </Section>
      </article>
    );
  }

  return (
    <article className="detail-inner">
      <header className="detail-header">
        <h2 className="detail-name">{anemia.name}</h2>
        <p className="muted detail-alt">
          {listHasContent(anemia.altNames) ? anemia.altNames.join(' \u00b7 ') : NOT_SPECIFIED}
        </p>
        <p className="detail-def">{anemia.definition}</p>
      </header>

      <div className="also-in">
        <span className="chips-label muted">Also in:</span>
        <div className="chips">
          {anemia.branches.map((branch) => {
            const meta = branchMeta.get(branch);
            if (!meta) return null;
            return (
              <span key={branch} className="chip" style={accentStyle(meta.accentVar)}>
                {meta.label}
              </span>
            );
          })}
        </div>
      </div>

      <Section title="Cause">
        {isPlaceholder(anemia.cause) ? <Muted /> : <RichText text={anemia.cause} />}
      </Section>

      <Section title="Pathophysiology">
        {isPlaceholder(anemia.pathophysiology) ? (
          <Muted />
        ) : (
          <RichText text={anemia.pathophysiology} />
        )}
      </Section>

      <Section title="CBC & Labs">
        <h4 className="detail-subtitle">CBC</h4>
        {rowsHaveContent(anemia.cbc) ? <LabTable rows={anemia.cbc} /> : <Muted />}
        <h4 className="detail-subtitle">Laboratory findings</h4>
        {rowsHaveContent(anemia.labs) ? <LabTable rows={anemia.labs} /> : <Muted />}
      </Section>

      <Section title="Peripheral smear">
        {listHasContent(anemia.smear) ? <Bullets items={anemia.smear} /> : <Muted />}
      </Section>

      <Section title="Diagnosis / Recognition">
        {isPlaceholder(anemia.diagnosis) ? <Muted /> : <RichText text={anemia.diagnosis} />}
      </Section>

      <Section title="Clinical features">
        <h4 className="detail-subtitle">General</h4>
        {listHasContent(clinicalFeatures.general) ? (
          <Bullets items={clinicalFeatures.general} />
        ) : (
          <Muted />
        )}
        <h4 className="detail-subtitle">Specific</h4>
        {listHasContent(clinicalFeatures.specific) ? (
          <Bullets items={clinicalFeatures.specific} />
        ) : (
          <Muted />
        )}
        {listHasContent(complications) ? (
          <>
            <h4 className="detail-subtitle">Complications</h4>
            <Bullets items={complications} />
          </>
        ) : null}
      </Section>

      <Section title="Key clues">
        <KeyCluesBox clues={listHasContent(anemia.keyClues) ? anemia.keyClues : [NOT_SPECIFIED]} />
      </Section>

      <CollapsibleSection title="Treatment">
        <p className="muted disclaimer">
          {'Educational summary only \u2014 not a prescribing guide.'}
        </p>
        {listHasContent(anemia.treatment) ? <Bullets items={anemia.treatment} /> : <Muted />}
      </CollapsibleSection>

      <Section title="Source">
        <p className="muted detail-source">{anemia.source}</p>
      </Section>
    </article>
  );
}
