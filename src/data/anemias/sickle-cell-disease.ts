import type { Anemia } from '../../types/anemia';

export const sickleCellDisease: Anemia = {
  id: 'sickle-cell-disease',
  name: 'Sickle Cell Disease',
  altNames: ['Sickle cell anemia (for Hb SS)'],
  definition:
    'Lifelong inherited disorder causing some red blood cells to be sickle-shaped (crescent-shaped) instead of disk-shaped.',
  branches: ['normocytic', 'genetic', 'hemolytic'],
  inheritedOrAcquired: 'inherited',
  cause:
    'Caused by genes passed from parents. Need two sickle cell genes (one from each parent) to have sickle cell disease. Sickle cell trait occurs with only one copy of the sickle cell gene and one normal copy.',
  pathophysiology:
    'Abnormal hemoglobin (HbS) causes RBCs to become rigid and sickle-shaped, leading to: chronic hemolytic anemia; vaso-occlusive events resulting in tissue ischemia, infarction, and inflammation.',
  cbc: [
    {
      label: 'MCV',
      value: 'Normocytic (microcytosis suggests concomitant alpha or beta thalassemia)',
    },
    {
      label: 'Reticulocyte count',
      value: 'Reticulocytosis \u2265 10% is common',
      direction: 'up',
    },
    { label: 'Nucleated RBCs', value: 'Frequently appear in peripheral blood' },
  ],
  smear: [
    'Sickle cells: Crescent-shaped RBCs, often with elongated or pointed ends, seen on dry-stained smears',
    'Nucleated RBCs',
  ],
  labs: [
    {
      label: 'Hemoglobin electrophoresis',
      value:
        'Homozygous state shows only Hb S with variable Hb F; heterozygous state shows more Hb A than Hb S',
    },
    { label: 'Solubility testing', value: 'Positive' },
    { label: 'DNA testing', value: 'For prenatal diagnosis or confirmation' },
    {
      label: 'Serum bilirubin',
      value: 'Usually elevated (e.g., 2\u20134 mg/dL)',
      direction: 'up',
    },
    {
      label: 'Reticulocyte count <1%',
      value: 'Suggests aplastic crisis, particularly when Hb decreases below patient\u2019s usual level',
      direction: 'down',
    },
    {
      label: 'Bone marrow',
      value: 'Not used for diagnosis; if done, shows hyperplasia with normoblasts predominating',
    },
  ],
  diagnosis:
    'Patients with symptoms or signs suggesting the disorder or its complications (poor growth, acute unexplained bone pain, aseptic necrosis of femoral head, unexplained hematuria), and patients with African ancestry and normocytic anemia (particularly with hemolysis) require laboratory tests for hemolytic anemia, hemoglobin electrophoresis, and examination of RBCs for sickling.',
  clinicalFeatures: {
    general: ['Mild jaundice and pallor common'],
    specific: [
      'Anemia can be severe but varies among patients and genotypes; usually compensated',
      'Hepatosplenomegaly common in children; spleen commonly atrophied in adults due to repeated infarctions and fibrosis (autosplenectomy)',
      'Cardiomegaly and systolic ejection murmurs common',
      'Cholelithiasis and chronic punched-out skin ulcers around ankles',
      'Painful vaso-occlusive crisis: Severe pain in long bones, hands and feet, back, and joints',
      'Acute chest syndrome: Sudden onset of fever, chest pain, pulmonary infiltrates; may follow bacterial pneumonia; hypoxemia may develop rapidly',
    ],
  },
  treatment: [
    'Analgesics and IV hydration for vaso-occlusive pain crisis',
    'Transfusion: Simple transfusion to correct anemia (e.g., during aplastic crisis); exchange transfusion during severe acute events (acute chest syndrome, stroke) to decrease Hb S percentage',
    'Chronic transfusion therapy: Indicated for prevention of recurrent cerebral thrombosis, especially in children, to maintain Hb S <30%',
    'Hematopoietic stem cell transplantation: Only curative treatment; traditionally with matched sibling donor, increasingly using alternative donors',
  ],
  keyClues: [
    'Sickle cells on peripheral smear',
    'HbS on hemoglobin electrophoresis',
    'Reticulocytosis \u2265 10%',
    'Vaso-occlusive crises',
    'Normocytic anemia with hemolysis',
    'African ancestry',
  ],
  source: 'Merck Manual \u2014 Sickle Cell Disease (Professional, Mar 2026)',
};
