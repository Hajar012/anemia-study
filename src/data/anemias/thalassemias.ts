import type { Anemia } from '../../types/anemia';

export const thalassemias: Anemia = {
  id: 'thalassemias',
  name: 'Thalassemias',
  altNames: ['Mediterranean anemia', 'thalassemia major and minor'],
  definition:
    'Group of inherited diseases due to disruption in manufacturing one of the four amino acid chains that compose hemoglobin.',
  branches: ['microcytic', 'genetic', 'hemolytic', 'hemolysis', 'decreased-production'],
  inheritedOrAcquired: 'inherited',
  cause:
    'Genetic mutations affecting alpha or beta globin chain synthesis. Alpha-thalassemia more common in people of African, Mediterranean, or Southeast Asian origin. Beta-thalassemia more common in people of Mediterranean, Indian, Middle Eastern, or Southeast Asian origin.',
  pathophysiology:
    'Hemoglobin is composed of two pairs of globin chains. Normally, adults have one pair of alpha chains and one pair of beta chains. In thalassemia, one or more of these chains are reduced or absent. Classification is based on the affected chain: alpha-thalassemia (alpha chain abnormality) or beta-thalassemia (beta chain abnormality).',
  cbc: [
    { label: 'MCV', value: 'Microcytic (low)', direction: 'down' },
    { label: 'MCH', value: 'Hypochromic' },
    {
      label: 'Reticulocyte count',
      value: 'Variable depending on severity',
      direction: 'variable',
    },
  ],
  smear: [
    'Target cells (dianocytes): Thin RBCs with a central dot of hemoglobin, due to imbalance between cell volume and hemoglobin content; characteristic of thalassemia but also occur in other hemoglobinopathies (Hb C, Hb S-C), after splenectomy, and in liver disease',
    'Microcytosis, hypochromia',
  ],
  labs: [
    {
      label: 'Hemoglobin electrophoresis',
      value: 'Diagnostic; shows specific globin chain abnormalities',
    },
  ],
  diagnosis:
    'Diagnosis generally requires specific hemoglobin testing. Classification by severity: thalassemia minor/trait (asymptomatic or mild anemia, no transfusion needed); thalassemia major (severe forms with markedly decreased globin production and severe anemia requiring transfusions).',
  clinicalFeatures: {
    general: ['Fatigue', 'Shortness of breath', 'Pallor'],
    specific: [
      'Alpha-thalassemia minor and beta-thalassemia minor: Discrete asymptomatic anemia',
      'Alpha-thalassemia major: Moderate to severe anemia, fatigue, shortness of breath, pallor, splenomegaly with abdominal bloating and discomfort',
      'Alpha-thalassemia major (if alpha chains absent): Fetus develops severe anemia, heart failure, and anasarca (hydrops fetalis); without intrauterine transfusions, many fetuses die before birth or are stillborn',
      'Beta-thalassemia major (Cooley anemia): Severe anemia symptoms (fatigue, weakness, shortness of breath), jaundice, skin ulcers, gallstones',
      'Splenomegaly',
      'Bone marrow hyperactivity causes bone thickening and enlargement (especially head and face)',
      'Long bones weakened and fracture easily',
      'Growth and puberty delays in children',
      'Increased iron absorption and frequent transfusions lead to iron overload, with iron deposition in heart muscle causing iron overload syndrome',
    ],
  },
  treatment: [
    'Mild thalassemia: May not require treatment',
    'Severe thalassemia: May require bone marrow transplantation',
    'Transfusion-dependent forms: Regular transfusions',
    'Iron chelation: For transfusional iron overload',
  ],
  keyClues: [
    'Microcytic anemia + target cells on smear',
    'Elevated Hb A2 or Hb F on electrophoresis (beta-thalassemia)',
    'Family history / ethnic background',
    'Normal or increased iron stores (distinguishes from iron deficiency)',
  ],
  source: 'Merck Manual \u2014 Thalassemias (Consumer, Apr 2026)',
};
