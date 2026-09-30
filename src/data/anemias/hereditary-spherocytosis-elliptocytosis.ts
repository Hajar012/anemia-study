import type { Anemia } from '../../types/anemia';

export const hereditarySpherocytosisAndElliptocytosis: Anemia = {
  id: 'hereditary-spherocytosis-and-elliptocytosis',
  name: 'Hereditary Spherocytosis and Hereditary Elliptocytosis',
  altNames: [
    'Chronic familial jaundice',
    'congenital hemolytic jaundice',
    'familial spherocytosis',
    'spherocytic anemia',
  ],
  definition:
    'Congenital disorders of the RBC membrane causing mild hemolytic anemia.',
  branches: ['normocytic', 'hemolytic', 'genetic'],
  inheritedOrAcquired: 'inherited',
  cause:
    'Hereditary spherocytosis is an autosomal dominant disease with variable gene penetrance due to mutations in spectrin, ankyrin, band 3, or protein 4.2. Approximately 25% of cases are sporadic (de novo dominant mutation) or autosomal recessive (rare).',
  pathophysiology:
    'In both disorders, RBC abnormalities are due to alterations in membrane proteins. In hereditary spherocytosis, there is disproportionate decrease in cell membrane surface area relative to intracellular content due to loss of membrane-associated proteins. The smaller cell surface alters the flexibility needed for the cell to pass through splenic microcirculation, causing intrasplenic hemolysis.',
  cbc: [
    {
      label: 'MCV',
      value:
        'Normal (spherocytes are spheroids with normal MCV, but mean corpuscular diameter is less than normal)',
    },
    {
      label: 'Reticulocyte count',
      value: 'Increased (reticulocytosis)',
      direction: 'up',
    },
  ],
  smear: [
    'Spherocytes (for hereditary spherocytosis)',
    'Elliptocytes (for hereditary elliptocytosis)',
  ],
  labs: [
    { label: 'Osmotic fragility', value: 'Increased (diagnostic)', direction: 'up' },
    { label: 'Direct antiglobulin (Coombs) test', value: 'Negative' },
    { label: 'Genetic testing', value: 'Often performed' },
  ],
  diagnosis:
    'Suspected in patients with hemolysis of unknown cause (suggested by anemia and reticulocytosis), particularly if splenomegaly, family history of similar manifestations, or suggestive RBC indices are present. Diagnosis requires demonstration of increased osmotic fragility and a negative direct antiglobulin test.',
  clinicalFeatures: {
    general: ['Symptoms and signs usually mild'],
    specific: [
      'Anemia may be so well compensated that it is unrecognized until an intercurrent viral illness (e.g., parvovirus infection) transiently decreases RBC production and causes aplastic crisis',
      'Jaundice and moderate symptoms in severe cases',
      'Splenomegaly: Almost invariable; rarely causes abdominal discomfort',
      'Hepatomegaly may be present',
      'Cholelithiasis (pigment stones): Frequent and may be the presenting sign',
    ],
  },
  treatment: [
    'Splenectomy: Rarely, patients <45 years with symptomatic disease require splenectomy',
  ],
  keyClues: [
    'Spherocytes on peripheral smear',
    'Increased osmotic fragility',
    'Negative direct antiglobulin (Coombs) test',
    'Splenomegaly',
    'Family history',
    'Reticulocytosis',
  ],
  source:
    'Merck Manual \u2014 Hereditary Spherocytosis and Hereditary Elliptocytosis (Professional, Apr 2026)',
};
