const MISSING = '\u2014';

type ComparisonRow = {
  name: string;
  cells: string[];
};

type ComparisonTable = {
  id: string;
  title: string;
  columns: string[];
  rows: ComparisonRow[];
};

const tables: ComparisonTable[] = [
  {
    id: 'microcytic',
    title: 'Microcytic differential',
    columns: [
      'MCV',
      'MCH/MCHC',
      'Ferritin',
      'Serum iron',
      'Transferrin/TIBC',
      'Peripheral smear',
      'Key clue',
    ],
    rows: [
      {
        name: 'Iron Deficiency Anemia',
        cells: [
          'Low (microcytic)',
          'Low (hypochromic)',
          'Decreased (most accurate test)',
          'Decreased',
          'Increased',
          'Red blood cells tend to be small and pale',
          'Low ferritin; pica in severe cases',
        ],
      },
      {
        name: 'Thalassemias',
        cells: [
          'Microcytic (low)',
          'Hypochromic',
          MISSING,
          MISSING,
          MISSING,
          'Target cells (dianocytes); microcytosis, hypochromia',
          'Target cells on smear; normal or increased iron stores (distinguishes from iron deficiency)',
        ],
      },
      {
        name: 'Anemia of Chronic Disease',
        cells: [
          'Normocytic initially; may become microcytic over time',
          MISSING,
          'Normal or elevated',
          'Decreased',
          'Decreased',
          MISSING,
          'Low serum iron + low transferrin + normal/elevated ferritin; chronic inflammatory condition',
        ],
      },
      {
        name: 'Sideroblastic Anemias',
        cells: [
          'Microcytic and hypochromic in congenital form; normocytic or macrocytic in acquired form',
          'Hypochromic (congenital form)',
          'Increased',
          'Increased (increased saturation)',
          'Increased',
          'Ring sideroblasts (diagnostic); basophilic stippling; hypochromic RBCs',
          'Ring sideroblasts on bone marrow; dimorphic RBC population with widened RDW',
        ],
      },
    ],
  },
  {
    id: 'macrocytic',
    title: 'Macrocytic differential',
    columns: [
      'MCV',
      'RDW',
      'Reticulocyte count',
      'Serum vitamin B12',
      'Serum folate',
      'Methylmalonic acid (MMA)',
      'Homocysteine',
      'Peripheral smear',
      'Key clue',
    ],
    rows: [
      {
        name: 'Vitamin B12 Deficiency',
        cells: [
          '> 100 fL (macrocytic)',
          'High (increased)',
          'Reticulocytopenia',
          'Decreased (< 200 pg/mL)',
          'Measured to differentiate from folate deficiency',
          'Elevated',
          'Elevated',
          'Macro-ovalocytes; hypersegmented neutrophils; Howell-Jolly bodies',
          'Neurologic symptoms (subacute combined degeneration, peripheral neuropathy) \u2014 unique to B12',
        ],
      },
      {
        name: 'Folate Deficiency',
        cells: [
          '> 100 fL (macrocytic)',
          'High (increased)',
          'Reticulocytopenia',
          'Measured to differentiate from vitamin B12 deficiency',
          'Decreased (< 3 mcg/L)',
          'Normal',
          'Elevated',
          'Macro-ovalocytes; hypersegmented neutrophils; Howell-Jolly bodies may be present',
          'NO neurologic deficits (unlike B12 deficiency); pregnancy-related neural tube defect risk',
        ],
      },
      {
        name: 'Myelodysplastic Syndromes (MDS)',
        cells: [
          'Usually macrocytic with increased RDW',
          'Increased',
          MISSING,
          MISSING,
          MISSING,
          MISSING,
          MISSING,
          'Macrocytosis and anisocytosis; pseudo Pelger-Hu\u00ebt cells; hypogranular platelets; monocytosis',
          'Older adult with refractory cytopenias; cytogenetic abnormalities (chromosomes 5 or 7); deletion 5q: macrocytic anemia + thrombocytosis',
        ],
      },
    ],
  },
  {
    id: 'hemolytic',
    title: 'Hemolytic patterns',
    columns: [
      'MCV',
      'Reticulocyte count',
      'Peripheral smear',
      'Direct antiglobulin (Coombs) test',
      'Osmotic fragility',
      'Key clue',
    ],
    rows: [
      {
        name: 'Hereditary Spherocytosis and Hereditary Elliptocytosis',
        cells: [
          'Normal',
          'Increased (reticulocytosis)',
          'Spherocytes (HS); elliptocytes (HE)',
          'Negative',
          'Increased (diagnostic)',
          'Spherocytes + increased osmotic fragility + negative Coombs; splenomegaly',
        ],
      },
      {
        name: 'G6PD Deficiency',
        cells: [
          'Normocytic (or slightly increased due to reticulocytosis)',
          'Increased during hemolytic episodes',
          'Bite cells (degmacytes); Heinz bodies; blister cells',
          'Negative',
          MISSING,
          'Acute hemolysis after oxidant exposure; X-linked inheritance; ethnic background (African, Mediterranean, Southeast Asian)',
        ],
      },
      {
        name: 'Sickle Cell Disease',
        cells: [
          'Normocytic (microcytosis suggests concomitant alpha or beta thalassemia)',
          'Reticulocytosis \u2265 10% is common',
          'Sickle cells; nucleated RBCs',
          MISSING,
          MISSING,
          'Sickle cells on peripheral smear; HbS on hemoglobin electrophoresis; vaso-occlusive crises',
        ],
      },
      {
        name: 'Autoimmune Hemolytic Anemia (AIHA)',
        cells: [
          'Normocytic; a high MCV may occur due to extreme reticulocytosis or agglutination in cold agglutinin disease',
          'High (reticulocytosis) in warm AIHA and cold agglutinin disease',
          'Spherocytes (microspherocytes); few or no schistocytes; RBC clumping in cold agglutinin disease',
          'Positive; establishes the diagnosis and may suggest the cause',
          'Positive',
          'Positive direct antiglobulin (Coombs) test; spherocytes on peripheral smear',
        ],
      },
      {
        name: 'Thalassemias',
        cells: [
          'Microcytic (low)',
          'Variable depending on severity',
          'Target cells (dianocytes); microcytosis, hypochromia',
          MISSING,
          MISSING,
          'Microcytic anemia + target cells on smear; elevated Hb A2 or Hb F (beta-thalassemia)',
        ],
      },
    ],
  },
];

export function CompareTables() {
  return (
    <div className="compare">
      <h2 className="detail-name">Comparison tables</h2>
      {tables.map((table) => (
        <section key={table.id} className="compare-section">
          <h3 className="compare-caption">{table.title}</h3>
          <div className="compare-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Anemia</th>
                  {table.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row.name}>
                    <th scope="row" className="compare-row-name">
                      {row.name}
                    </th>
                    {row.cells.map((cell, index) => (
                      <td
                        key={index}
                        className={cell === MISSING ? 'compare-missing' : undefined}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
      <p className="compare-footnote muted">
        Blank cells: not specified by Merck Manual source.
      </p>
    </div>
  );
}
