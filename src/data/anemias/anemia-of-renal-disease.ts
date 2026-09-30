import type { Anemia } from '../../types/anemia';

export const anemiaOfRenalDisease: Anemia = {
  id: 'anemia-of-renal-disease',
  name: 'Anemia of Renal Disease',
  altNames: ['Anemia of Chronic Kidney Disease'],
  definition:
    'Hypoproliferative anemia resulting primarily from EPO deficiency or decreased response to EPO; tends to be normocytic and normochromic.',
  branches: ['normocytic', 'decreased-production', 'acquired'],
  inheritedOrAcquired: 'acquired',
  cause:
    'Most common mechanism is hypoproliferation due to decreased EPO production. Absence of EPO leads to loss of erythroferrone production, resulting in loss of hepcidin suppression and increased iron sequestration. Other factors include blood loss (dysfunctional platelets, dialysis, angiodysplasia), bone marrow resistance to EPO, secondary hyperparathyroidism, and uremia (shortened RBC survival).',
  pathophysiology:
    'EPO deficiency causes loss of erythroferrone, leading to loss of hepcidin suppression and increased iron sequestration (similar to anemia of chronic disease). Anemia appears when creatinine clearance is <45 mL/min. Glomerular lesions typically cause the most severe anemia for their degree of renal failure.',
  cbc: [
    { label: 'MCV', value: 'Normocytic' },
    { label: 'MCHC', value: 'Normochromic' },
    {
      label: 'Reticulocyte count',
      value: 'Low (reticulocytopenia)',
      direction: 'down',
    },
  ],
  smear: [
    'RBC fragmentation on peripheral smear (particularly with thrombocytopenia) suggests microangiopathic hemolytic anemia, in which case reticulocytes are typically high.',
  ],
  labs: [
    { label: 'EPO', value: 'Decreased (renal production)', direction: 'down' },
    { label: 'Reticulocytes', value: 'Decreased', direction: 'down' },
    {
      label: 'Creatinine clearance',
      value: '<45 mL/min (when anemia appears)',
    },
  ],
  diagnosis:
    'Diagnosis rests on demonstration of renal insufficiency, normocytic anemia, and peripheral reticulocytopenia. Bone marrow may show erythroid hypoplasia.',
  clinicalFeatures: {
    general: ['Not specified by source.'],
    specific: ['Those of the underlying renal disease.'],
  },
  treatment: [
    'Correction of underlying renal disorder: If renal function returns to normal, anemia slowly corrects',
    'Recombinant EPO: Improves anemia and reduces transfusion needs in chronic kidney disease; generally started when Hb <9\u201310 g/dL in dialysis patients',
    'Iron supplementation: Given with EPO',
    'In long-term dialysis: Recombinant EPO (epoetin alfa or darbepoetin alfa) with iron supplements is treatment of choice',
  ],
  keyClues: [
    'Normocytic anemia + low reticulocytes',
    'Renal insufficiency (creatinine clearance <45 mL/min)',
    'Low EPO',
  ],
  source: 'Merck Manual \u2014 Anemia of Renal Disease (Professional, Mar 2025)',
};
