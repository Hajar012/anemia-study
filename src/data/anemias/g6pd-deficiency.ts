import type { Anemia } from '../../types/anemia';

export const g6pdDeficiency: Anemia = {
  id: 'g6pd-deficiency',
  name: 'Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency',
  altNames: ['Favism (when triggered by fava beans)'],
  definition:
    'Inherited enzyme deficiency causing episodic hemolytic anemia triggered by oxidative stress.',
  branches: ['normocytic', 'hemolytic', 'hemolysis', 'genetic'],
  inheritedOrAcquired: 'inherited',
  cause:
    'X-linked genetic deficiency of glucose-6-phosphate dehydrogenase, an enzyme in the hexose monophosphate shunt pathway that protects RBCs from oxidative damage.',
  pathophysiology:
    'G6PD deficiency renders RBCs vulnerable to oxidative stress. When exposed to oxidant drugs, infections, or fava beans, hemoglobin oxidizes and precipitates as Heinz bodies. RBCs with Heinz bodies are removed by the spleen, causing intravascular and extravascular hemolysis.',
  cbc: [
    { label: 'MCV', value: 'Normocytic (or slightly increased due to reticulocytosis)' },
    {
      label: 'Reticulocyte count',
      value: 'Increased during hemolytic episodes',
      direction: 'up',
    },
    {
      label: 'Hemoglobin',
      value: 'Falls abruptly during acute hemolysis',
      direction: 'down',
    },
  ],
  smear: [
    'Bite cells (degmacytes): RBCs with a bite-like defect where Heinz bodies were removed by splenic macrophages',
    'Heinz bodies: Denatured hemoglobin inclusions (best seen with supravital staining)',
    'Blister cells: RBCs with vesicles',
  ],
  labs: [
    {
      label: 'G6PD enzyme activity',
      value: 'Decreased (diagnostic)',
      direction: 'down',
      note: 'Must be interpreted carefully during hemolytic episodes because reticulocytes have higher G6PD activity.',
    },
    { label: 'Bilirubin', value: 'Increased (indirect)', direction: 'up' },
    { label: 'LDH', value: 'Increased', direction: 'up' },
    { label: 'Haptoglobin', value: 'Decreased', direction: 'down' },
    { label: 'Direct antiglobulin (Coombs) test', value: 'Negative' },
  ],
  diagnosis:
    'Suspected in patients with acute hemolysis after exposure to oxidant drugs, infection, or fava beans, particularly in individuals of African, Mediterranean, or Southeast Asian descent. Diagnosis confirmed by measuring G6PD enzyme activity; testing should be repeated after resolution of hemolysis if initially normal.',
  clinicalFeatures: {
    general: ['Pallor', 'Fatigue'],
    specific: [
      'Usually asymptomatic between episodes',
      'Acute hemolytic episode: jaundice, dark urine (hemoglobinuria), pallor, fatigue, back pain',
      'Severe cases: cardiovascular collapse, acute kidney injury',
    ],
  },
  treatment: [
    'Avoidance of triggers: Oxidant drugs (e.g., primaquine, dapsone, nitrofurantoin, sulfonamides), fava beans, naphthalene',
    'Supportive care: Hydration, transfusion for severe anemia',
    'No specific therapy to correct the enzyme deficiency',
  ],
  keyClues: [
    'Bite cells and Heinz bodies on smear',
    'Acute hemolysis after oxidant exposure',
    'Negative Coombs test',
    'X-linked inheritance',
    'Ethnic background (African, Mediterranean, Southeast Asian)',
  ],
  source:
    'Merck Manual \u2014 Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency (Professional, Mar 2025)',
};
