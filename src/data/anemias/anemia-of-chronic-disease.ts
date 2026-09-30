import type { Anemia } from '../../types/anemia';

export const anemiaOfChronicDisease: Anemia = {
  id: 'anemia-of-chronic-disease',
  name: 'Anemia of Chronic Disease',
  altNames: ['Anemia of Chronic Inflammation'],
  definition:
    'Multifactorial anemia characterized by microcytic or normocytic anemia and low reticulocyte count, requiring an underlying chronic inflammatory disorder.',
  branches: ['normocytic', 'microcytic', 'decreased-production', 'acquired'],
  inheritedOrAcquired: 'acquired',
  cause:
    'Occurs in the setting of a chronic inflammatory disorder: chronic infection, autoimmune disease (especially rheumatoid arthritis), kidney disease, heart failure, or cancer. The same process appears to begin acutely during virtually any infection or inflammation, including trauma, serious illness, or after surgery.',
  pathophysiology:
    'Three mechanisms identified: (1) Slightly shortened RBC survival (probably due to increased hemophagocytosis by macrophages). (2) Impaired erythropoiesis due to decreased EPO production and reduced marrow responsiveness to EPO; inflammatory cytokines can impair erythroid proliferation and differentiation via free radical formation and/or apoptosis induction. (3) Altered iron metabolism due to increased hepcidin, which inhibits iron absorption and recycling, leading to iron sequestration. Reticuloendothelial cells retain iron from senescent RBCs, making iron unavailable for hemoglobin synthesis. Thus, there is failure to compensate for anemia by increased RBC production.',
  cbc: [
    {
      label: 'MCV',
      value: 'Normocytic initially; may become microcytic over time',
    },
    { label: 'Reticulocyte count', value: 'Low', direction: 'down' },
  ],
  smear: ['Not specified by source.'],
  labs: [
    { label: 'Serum iron', value: 'Decreased', direction: 'down' },
    { label: 'Transferrin', value: 'Decreased', direction: 'down' },
    { label: 'Ferritin', value: 'Normal or elevated' },
    { label: 'Reticulocytes', value: 'Low', direction: 'down' },
  ],
  diagnosis:
    'Diagnosis requires the presence of an inflammatory chronic disease (infection, autoimmune disease, kidney disease, cancer). Should be suspected in patients with microcytic or normocytic anemia who also have a chronic disease, infection, inflammation, or cancer. Diagnosis is typically made by excluding other causes of anemia.',
  clinicalFeatures: {
    general: ['Fatigue', 'Weakness', 'Paleness'],
    specific: [
      'Signs are generally those of the underlying disease (infection, inflammation, cancer)',
      'Anemia is generally mild to moderate; symptoms (fatigue, weakness, paleness) may result from the underlying disease rather than the anemia itself',
    ],
  },
  treatment: [
    'Primary: Treatment of the underlying disorder',
    'Erythropoietin: In certain cases (e.g., chronic kidney disease), EPO or darbepoetin may be given',
    'Iron: Usually given when using EPO to ensure appropriate response; iron deficiency can coexist with anemia of chronic disease',
  ],
  keyClues: [
    'Low serum iron + low transferrin + normal/elevated ferritin',
    'Microcytic or normocytic anemia with low reticulocytes',
    'Presence of chronic inflammatory condition',
  ],
  source:
    'Merck Manual \u2014 Anemia of Chronic Disease (Professional, Mar 2025; Consumer, Apr 2026)',
};
