import type { Anemia } from '../../types/anemia';

export const folateDeficiency: Anemia = {
  id: 'folate-deficiency',
  name: 'Folate Deficiency',
  altNames: ['Folic acid deficiency'],
  definition:
    'Deficiency of folate causing megaloblastic anemia (indistinguishable from that due to vitamin B12 deficiency) and, in pregnancy, increased risk of neural tube birth defects.',
  branches: ['macrocytic', 'decreased-production', 'acquired'],
  inheritedOrAcquired: 'acquired',
  cause:
    'The most common causes of folate deficiency are:\n- Inadequate intake \u2014 usually in patients with undernutrition or alcohol use disorder\n- Increased demand \u2014 eg, due to pregnancy or lactation; also chronic hemolysis (ie, hemoglobinopathies)\n- Impaired absorption \u2014 eg, in celiac disease, tropical sprue, short bowel syndrome, or due to certain medications\n- Inadequate bioavailability and increased excretion\n\nProlonged cooking destroys folate, predisposing to inadequate intake. Intake is sometimes barely adequate (eg, in people with alcohol use disorder). Liver stores provide only a several-month supply. Alcohol interferes with folate absorption, metabolism, renal excretion, and enterohepatic reabsorption and reduces healthy food intake.\n\nMedications that impair folate metabolism: 5-fluorouracil, metformin, methotrexate, phenobarbital, phenytoin, triamterene, trimethoprim.\n\nFolate deficiency is exceedingly rare in countries where cereals and grains are fortified with folic acid.',
  pathophysiology:
    'Folates are involved in red blood cell maturation and synthesis of purines and pyrimidines. They are required for development of the fetal nervous system. Absorption occurs in the duodenum and upper jejunum. Enterohepatic circulation of folate occurs.\n\nMegaloblastic states result from defective DNA synthesis. RNA synthesis continues, resulting in a large cell with a large nucleus. All cell lines have dyspoiesis (cytoplasmic maturity greater than nuclear maturity), producing megaloblasts in the marrow before they appear in the peripheral blood. Dyspoiesis results in intramedullary cell death, making erythropoiesis ineffective. Because dyspoiesis affects all cell lines, reticulocytopenia and, during later stages, leukopenia and thrombocytopenia develop.',
  cbc: [
    {
      label: 'MCV',
      value:
        '> 100 fL (macrocytic) \u2014 megaloblastic anemia indistinguishable from that of vitamin B12 deficiency',
    },
    { label: 'RDW', value: 'High (increased)', direction: 'up' },
    { label: 'Reticulocyte count', value: 'Reticulocytopenia', direction: 'down' },
    { label: 'Hemoglobin/Hematocrit', value: 'Decreased', direction: 'down' },
    { label: 'WBC', value: 'Neutropenia may develop', direction: 'down' },
    {
      label: 'Platelets',
      value: 'Thrombocytopenia may develop in severe cases',
      direction: 'down',
    },
  ],
  smear: [
    'Macro-ovalocytes: Large oval red blood cells',
    'Anisocytosis: Variation in RBC size',
    'Poikilocytosis: Variation in RBC shape',
    'Hypersegmented neutrophils: Measurement of neutrophil hypersegmentation is sensitive and readily available',
    'Howell-Jolly bodies: May be present',
  ],
  labs: [
    {
      label: 'Serum folate',
      value:
        'Decreased. If < 3 mcg/L or ng/mL (< 7 nmol/L), deficiency is likely. Serum folate reflects folate status unless intake has recently increased or decreased.',
      direction: 'down',
    },
    {
      label: 'Erythrocyte (RBC) folate',
      value:
        'Decreased. Better reflects tissue stores if intake has changed. A level of < 140 mcg/L or ng/mL (< 305 nmol/L) indicates inadequate status.',
      direction: 'down',
    },
    {
      label: 'Serum vitamin B12',
      value: 'Measured to differentiate from vitamin B12 deficiency',
    },
    {
      label: 'Homocysteine',
      value:
        'Elevated (suggests tissue folate deficiency; also affected by vitamin B12 and vitamin B6 levels, renal insufficiency, and genetic factors)',
      direction: 'up',
    },
    {
      label: 'Methylmalonic acid (MMA)',
      value:
        'Normal. A normal MMA level may differentiate folate deficiency from vitamin B12 deficiency because MMA rises in B12 deficiency but not in folate deficiency.',
    },
  ],
  diagnosis:
    'Diagnosis requires laboratory testing to confirm. Complete blood count and serum vitamin B12 and folate levels are done. CBC may indicate megaloblastic anemia indistinguishable from that of vitamin B12 deficiency.',
  clinicalFeatures: {
    general: [
      'Anemia may develop insidiously and, because of compensatory mechanisms, be more severe than symptoms suggest',
    ],
    specific: [
      'Glossitis',
      'Diarrhea',
      'Depression',
      'Confusion',
      'Folate deficiency during pregnancy: Increases the risk of fetal neural tube defects and perhaps other brain defects',
      'Note: Neurologic lesions seen in B12 deficiency do not occur in folate deficiency',
    ],
  },
  treatment: [
    'Supplemental oral folate: 400\u20131000 mcg orally once a day replenishes tissues and is usually successful even if deficiency resulted from malabsorption',
    'Normal requirement: 400 mcg/day',
    'Pregnant women: Recommended dietary allowance (RDA) is 600 mcg/day. All women who are pregnant or who plan to or may become pregnant should take folic acid supplements, 400\u2013800 mcg orally once a day.',
    'Women who have had a fetus or infant with a neural tube defect: Recommended dose is 4000 mcg/day, started 3 months before conception (if possible) and continued until 12 weeks of gestation',
    'Upper limit: 1000 mcg; higher daily doses (up to 4 mg) are recommended for women who have had a baby with a neural tube defect',
    'CRITICAL CAUTION: In patients with megaloblastic anemia, vitamin B12 deficiency must be ruled out before treating with folate. If vitamin B12 deficiency is present, folate supplementation can alleviate the anemia but does not reverse, and may even worsen, neurologic deficits.',
    'Folate is essentially nontoxic. Women taking both oral contraceptives and antiseizure medications may need to take folate supplements to maintain birth control effectiveness.',
  ],
  keyClues: [
    'Macrocytosis (MCV > 100 fL) + hypersegmented neutrophils + macro-ovalocytes',
    'Low serum folate and low RBC folate',
    'Normal methylmalonic acid (distinguishes from vitamin B12 deficiency)',
    'Elevated homocysteine',
    'Glossitis, diarrhea, depression, confusion',
    'NO neurologic deficits (unlike B12 deficiency)',
    'Pregnancy-related neural tube defect risk',
  ],
  source:
    'Merck Manual \u2014 Folate Deficiency (Professional, Aug 2024) and Megaloblastic Macrocytic Anemias (Professional, Mar 2025)',
};
