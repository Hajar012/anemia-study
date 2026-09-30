import type { Anemia } from '../../types/anemia';

export const myelodysplasticSyndromes: Anemia = {
  id: 'myelodysplastic-syndromes',
  name: 'Myelodysplastic Syndromes (MDS)',
  altNames: ['Myelodysplasia'],
  definition:
    'Group of disorders characterized by peripheral blood and bone marrow morphologic abnormalities in 10\u201320% of cells of a particular lineage, with specific cytogenetic abnormalities and somatic mutations.',
  branches: [
    'macrocytic',
    'normocytic',
    'microcytic',
    'decreased-production',
    'marrow-disorder',
    'acquired',
  ],
  inheritedOrAcquired: 'acquired',
  cause:
    'Somatic mutations and cytogenetic abnormalities; one or more clonal cytogenetic abnormalities often involving chromosomes 5 or 7.',
  pathophysiology:
    'Ineffective hematopoiesis with morphologic abnormalities in blood and bone marrow.',
  cbc: [
    { label: 'MCV', value: 'Usually macrocytic with increased RDW' },
    {
      label: 'Anemia',
      value:
        'Most common feature, usually associated with macrocytosis and anisocytosis',
    },
    { label: 'WBC', value: 'May be normal, increased, or decreased' },
    {
      label: 'Platelets',
      value:
        'Some degree of thrombocytopenia usual; in deletion 5q syndrome, thrombocytosis is typical',
    },
  ],
  smear: [
    'Macrocytosis and anisocytosis',
    'Neutrophil cytoplasmic granularity decreased, with anisocytosis and variable or absent granules',
    'Pseudo Pelger-Hu\u00ebt cells (hyposegmented neutrophils) may be seen',
    'Platelets vary in size, some hypogranular',
    'Monocytosis characteristic of chronic and juvenile myelomonocytic leukemia subgroups',
  ],
  labs: [
    { label: 'CBC', value: 'Anemia, often macrocytic' },
    { label: 'RDW', value: 'Increased', direction: 'up' },
    {
      label: 'Bone marrow',
      value:
        'Morphologic abnormalities in 10\u201320% of cells of a particular lineage; cytogenetic abnormalities often involving chromosomes 5 or 7',
    },
    {
      label: 'Deletion 5q syndrome',
      value:
        'Unique form with macrocytic anemia and thrombocytosis, responsive to lenalidomide',
    },
  ],
  diagnosis:
    'Suspected in patients (especially older) with refractory anemia, neutropenia, or thrombocytopenia. Diagnosis suggested by peripheral blood and bone marrow morphologic abnormalities; established by demonstrating specific cytogenetic abnormalities and somatic mutations. Must exclude cytopenias secondary to autoimmune disorders, vitamin B12/folate deficiencies, aplastic anemia, PNH, copper deficiency, zinc toxicity, or medication effects.',
  clinicalFeatures: {
    general: ['Pallor', 'Weakness', 'Fatigue'],
    specific: [
      'Fever and infections (neutropenia)',
      'Bruising, petechiae, epistaxis, mucosal bleeding (thrombocytopenia)',
      'Splenomegaly and hepatomegaly are not uncommon',
    ],
  },
  treatment: [
    'Supportive care: Chronic blood and platelet transfusions for symptomatic patients',
    'Iron chelation: May benefit patients with lower-risk MDS and serum ferritin >1,000 ng/mL',
    'Erythrocyte-stimulating agents (ESA): Decrease anemia severity in 15\u201320% of patients (especially non-transfusion-dependent with serum EPO <500 mIU/mL)',
    'ESA + G-CSF: May increase erythroid response to nearly 40% in refractory anemia with ringed sideroblasts',
    'Luspatercept: Successful in increasing hematocrit in very low- to intermediate-risk MDS with ringed sideroblasts after ESA failure',
    'Medications: Azacitidine, decitabine, decitabine/cedazuridine',
    'Allogeneic stem cell transplantation',
  ],
  keyClues: [
    'Macrocytic anemia + anisocytosis + increased RDW',
    'Pseudo Pelger-Hu\u00ebt cells',
    'Cytogenetic abnormalities (especially chromosomes 5 or 7)',
    'Older adult with refractory cytopenias',
    'Deletion 5q syndrome: macrocytic anemia + thrombocytosis, lenalidomide-responsive',
  ],
  source:
    'Merck Manual \u2014 Myelodysplastic Syndromes (MDS) (Professional, Feb 2026)',
};
