import type { Anemia } from '../../types/anemia';

export const sideroblasticAnemias: Anemia = {
  id: 'sideroblastic-anemias',
  name: 'Sideroblastic Anemias',
  altNames: [],
  definition:
    'Group of anemias characterized by increased serum iron saturation, ferritin, and transferrin, plus ring sideroblasts (erythroblasts with perinuclear mitochondria loaded with iron).',
  branches: [
    'microcytic',
    'normocytic',
    'macrocytic',
    'decreased-production',
    'genetic',
    'acquired',
  ],
  inheritedOrAcquired: 'both',
  cause:
    'Acquired: Frequently associated with myelodysplastic syndrome (somatic mutations in RNA splicing genes, most commonly SF3B1, occurring in adulthood); less common causes include vitamin B6 (pyridoxine) or copper deficiency (possibly caused by zinc ingestion), medications (chloramphenicol, cycloserine, isoniazid, linezolid, pyrazinamide), toxins (ethanol, zinc, lead)\n\nCongenital: Caused by X-linked or autosomal mutations; most common is X-linked form caused by heterozygous mutation in ALAS2 gene',
  pathophysiology:
    'Sideroblastic anemias are due to impaired iron utilization, characterized by inadequate mitochondrial iron use due to impaired heme synthesis, despite adequate or increased iron availability. In both acquired and congenital sideroblastic anemia, heme synthesis is impaired by inability to incorporate iron into protoporphyrin IX, inducing ring sideroblast formation.',
  cbc: [
    {
      label: 'MCV',
      value:
        'Microcytic and hypochromic in congenital form; normocytic or macrocytic in acquired form',
    },
    {
      label: 'RDW',
      value: 'Typically widened due to dimorphism (variation in RBC size)',
      direction: 'up',
    },
    { label: 'Reticulocyte count', value: 'Deficient production' },
  ],
  smear: [
    'Ring sideroblasts (erythroblasts with perinuclear mitochondria loaded with iron) \u2014 diagnostic finding',
    'Basophilic stippling (siderocytes containing iron-loaded granules, Pappenheimer bodies)',
    'Hypochromic RBCs',
  ],
  labs: [
    {
      label: 'Serum iron',
      value: 'Increased (increased saturation)',
      direction: 'up',
    },
    { label: 'Ferritin', value: 'Increased', direction: 'up' },
    { label: 'Transferrin', value: 'Increased', direction: 'up' },
    { label: 'Bone marrow', value: 'Ring sideroblasts present' },
  ],
  diagnosis:
    'Diagnosis requires CBC, reticulocyte count, peripheral smear, iron studies, and bone marrow examination.',
  clinicalFeatures: {
    general: ['Fatigue', 'Lethargy'],
    specific: ['Not specified by source.'],
  },
  treatment: [
    'Stop causative substances: zinc, certain medications, ethanol',
    'Vitamin supplements',
    'Erythropoietin or other treatments for myelodysplastic syndrome, as appropriate',
  ],
  keyClues: [
    'Ring sideroblasts on bone marrow',
    'Increased serum iron + increased ferritin + increased transferrin saturation',
    'Basophilic stippling (Pappenheimer bodies)',
    'Dimorphic RBC population with widened RDW',
  ],
  source: 'Merck Manual \u2014 Sideroblastic Anemias (Professional, Mar 2025)',
};
