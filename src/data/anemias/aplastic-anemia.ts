import type { Anemia } from '../../types/anemia';

export const aplasticAnemia: Anemia = {
  id: 'aplastic-anemia',
  name: 'Aplastic Anemia',
  altNames: ['Hypoplastic Anemia'],
  definition:
    'Disorder of the hematopoietic stem cell resulting in loss of blood cell precursors, hypoplasia or aplasia of bone marrow, and cytopenias in two or more cell lines.',
  branches: [
    'normocytic',
    'decreased-production',
    'marrow-disorder',
    'acquired',
    'genetic',
  ],
  inheritedOrAcquired: 'both',
  cause:
    'Idiopathic in approximately half of cases. Recognized causes include:\n- Chemicals (benzene, inorganic arsenic)\n- Medications (antineoplastic drugs, antibiotics, NSAIDs, antiseizure medications, acetazolamide, gold salts, penicillamine, quinacrine)\n- Hepatitis (seronegative)\n- Pregnancy\n- Radiation\n- Viruses (Epstein-Barr virus, cytomegalovirus)\n- Inherited disorders of bone marrow failure (Fanconi anemia, Shwachman-Diamond syndrome, dyskeratosis congenita)',
  pathophysiology:
    'Precise mechanism remains unclear, but in the majority of acquired cases, the mechanism involves an immune attack on the hematopoietic stem cell. Clonal hematopoiesis is frequently present, with risk of progression to myeloid malignancy.',
  cbc: [
    { label: 'MCV', value: 'Normocytic' },
    {
      label: 'Pancytopenia',
      value: 'Decreased RBCs, WBCs, and/or platelets',
      direction: 'down',
    },
    { label: 'Reticulocyte count', value: 'Decreased', direction: 'down' },
  ],
  smear: ['Not specified by source.'],
  labs: [
    { label: 'CBC', value: 'Pancytopenia', direction: 'down' },
    { label: 'Reticulocyte count', value: 'Decreased', direction: 'down' },
    { label: 'Bone marrow biopsy', value: 'Hypocellular marrow' },
    {
      label: 'Severe aplastic anemia',
      value:
        'Bone marrow <25% cellularity AND \u22652 of: ANC <500/microL, absolute reticulocyte count <60,000/microL, platelet count <20,000/microL',
    },
    { label: 'Very severe aplastic anemia', value: 'ANC <200/microL' },
    {
      label: 'Flow cytometry',
      value: 'PNH clone detection can exclude inherited syndrome',
    },
    {
      label: 'Genetic testing',
      value:
        'Consider chromosome breakage analysis (Fanconi anemia), telomere length testing',
    },
  ],
  diagnosis:
    'Suspected in patients (particularly young) with pancytopenia. Diagnosis requires demonstration of peripheral pancytopenia and bone marrow biopsy revealing hypocellular marrow.',
  clinicalFeatures: {
    general: ['Weakness', 'Easy fatigability'],
    specific: [
      'Onset usually insidious (weeks to months after exposure)',
      'Severe thrombocytopenia: petechiae, ecchymosis, bleeding from gums, into conjunctivae',
      'Agranulocytosis: life-threatening infections',
      'Splenomegaly is absent unless induced by transfusion hemosiderosis',
    ],
  },
  treatment: [
    'Immunosuppression: Equine antithymocyte globulin and cyclosporine',
    'Bone marrow transplantation',
  ],
  keyClues: [
    'Pancytopenia + hypocellular bone marrow',
    'No splenomegaly',
    'Reticulocytopenia',
  ],
  source: 'Merck Manual \u2014 Aplastic Anemia (Professional, Mar 2025)',
};
