import type { Anemia } from '../../types/anemia';

export const vitaminB12Deficiency: Anemia = {
  id: 'vitamin-b12-deficiency',
  name: 'Vitamin B12 Deficiency',
  altNames: [
    'Cobalamin deficiency',
    'pernicious anemia (specifically refers to anemia resulting from vitamin B12 deficiency caused by an autoimmune metaplastic atrophic gastritis with loss of intrinsic factor)',
  ],
  definition:
    'Deficiency of vitamin B12 causing megaloblastic anemia, damage to the white matter of the spinal cord and brain, and peripheral neuropathy.',
  branches: ['macrocytic', 'decreased-production', 'acquired', 'genetic'],
  inheritedOrAcquired: 'both',
  cause:
    'Vitamin B12 deficiency can result from:\n- Inadequate intake \u2014 possible in vegans but otherwise unlikely. Breastfed babies of vegan mothers may develop deficiency by age 4\u20136 months because their liver stores are limited and rapid growth increases demand.\n- Inadequate absorption \u2014 most common cause. In older adults, most commonly results from decreased acid secretion (crystalline vitamin B12 can be absorbed, but food-bound B12 is not liberated normally). May occur in small intestinal bacterial overgrowth (blind loop syndrome), fish tapeworm infestation, inflammatory bowel disease, surgical removal of ileal absorptive sites, chronic pancreatitis, gastric or bariatric surgery, malabsorption syndromes, advanced HIV infection, use of certain medications (eg, antacids, metformin), repeated exposure to nitrous oxide, and Imerslund-Graesbeck syndrome.\n- Decreased utilization\n- Use of certain medications\n\nPernicious anemia specifically refers to anemia resulting from vitamin B12 deficiency caused by an autoimmune metaplastic atrophic gastritis with loss of intrinsic factor. Patients with classic pernicious anemia, most commonly younger adults, are at increased risk of stomach and other gastrointestinal cancers.',
  pathophysiology:
    'Cobalamin compounds are involved in nucleic acid metabolism, methyl transfer, and myelin synthesis and repair. They are necessary for the formation of normal red blood cells and normal neural function.\n\nFood-bound vitamin B12 is released in the stomach\u2019s acidic environment and bound to R protein (haptocorrin). Pancreatic enzymes cleave this B12 complex in the small intestine. After cleavage, intrinsic factor (secreted by parietal cells in the gastric mucosa) binds with vitamin B12. Intrinsic factor is required for absorption of vitamin B12, which takes place in the terminal ileum. Vitamin B12 in plasma is bound to transcobalamins I and II; transcobalamin II delivers vitamin B12 to tissues. The liver stores large amounts of vitamin B12. Liver stores can normally sustain physiologic needs for 3\u20135 years if B12 intake stops (eg, in people who become vegans) and for months to 1 year if enterohepatic reabsorption capacity is absent.\n\nMegaloblastic states result from defective DNA synthesis. RNA synthesis continues, resulting in a large cell with a large nucleus. All cell lines have dyspoiesis (cytoplasmic maturity greater than nuclear maturity), producing megaloblasts in the marrow before they appear in the peripheral blood. Dyspoiesis results in intramedullary cell death, making erythropoiesis ineffective.',
  cbc: [
    {
      label: 'MCV',
      value:
        '> 100 fL (macrocytic) in the absence of iron deficiency, thalassemia trait, or renal disease',
    },
    {
      label: 'RDW',
      value: 'High (increased RBC distribution width)',
      direction: 'up',
    },
    { label: 'Reticulocyte count', value: 'Reticulocytopenia', direction: 'down' },
    { label: 'Hemoglobin/Hematocrit', value: 'Decreased', direction: 'down' },
    { label: 'WBC', value: 'Neutropenia develops later', direction: 'down' },
    {
      label: 'Platelets',
      value:
        'Thrombocytopenia is often present in severe cases; platelets may be bizarre in size and shape',
      direction: 'down',
    },
    {
      label: 'Important caveat',
      value:
        'If iron deficiency or impaired iron utilization or renal disease are present simultaneously, macrocytosis may not develop. Severe neurologic disease may occur without anemia or macrocytosis.',
    },
  ],
  smear: [
    'Macro-ovalocytes: Large oval red blood cells',
    'Anisocytosis: Variation in RBC size',
    'Poikilocytosis: Variation in RBC shape',
    'Hypersegmented neutrophils: Hypersegmentation of polymorphonuclear neutrophils develops early',
    'Howell-Jolly bodies: Residual fragments of the nucleus, usually present',
    'Important caveat: Although iron deficiency can mask macrocytosis, Howell-Jolly bodies and granulocyte hypersegmentation should still be present',
  ],
  labs: [
    {
      label: 'Serum vitamin B12',
      value:
        'Decreased. A level < 200 pg/mL (< 145 pmol/L) indicates deficiency. Levels between 200 and 350 pg/mL (145\u2013260 pmol/L) are nondiagnostic / low-normal.',
      direction: 'down',
    },
    {
      label: 'Serum folate',
      value: 'Measured to differentiate from folate deficiency',
    },
    {
      label: 'Methylmalonic acid (MMA)',
      value:
        'Elevated in vitamin B12 deficiency. May also be elevated in renal failure. Remains normal in folate deficiency. Can be used to monitor response to treatment.',
      direction: 'up',
    },
    {
      label: 'Homocysteine',
      value:
        'Elevated (may be elevated with either vitamin B12 or folate deficiency)',
      direction: 'up',
    },
    {
      label: 'Holotranscobalamin II',
      value:
        'When < 40 pg/mL (< 30 pmol/L), vitamin B12 is deficient',
      direction: 'down',
    },
    {
      label: 'Schilling test',
      value:
        'Used to determine etiology (especially intrinsic factor deficiency / classic pernicious anemia). If absorption is normal, \u2265 9% of the radiolabeled dose appears in the urine. Reduced urinary excretion (< 5% if kidney function is normal) indicates inadequate absorption. Improved absorption with added intrinsic factor confirms pernicious anemia. Test is often difficult to do or interpret; does not measure absorption of protein-bound B12.',
    },
    {
      label: 'Serum gastrin / intrinsic factor autoantibodies',
      value: 'May be measured; sensitivity and specificity may be poor',
    },
  ],
  diagnosis:
    'Diagnosis is based on CBC and vitamin B12 and folate levels. CBC usually detects megaloblastic anemia. Tissue deficiency and macrocytic indexes may precede the development of anemia. The folate level is measured because vitamin B12 deficiency must be differentiated from folate deficiency as a cause of megaloblastic anemia. When clinical judgment suggests vitamin B12 deficiency but the B12 level is low-normal or hematologic indexes are normal, measure methylmalonic acid, homocysteine, or holotranscobalamin II. After diagnosis, additional tests (eg, Schilling test) may be indicated for young and middle-aged adults but usually not for older adults.',
  clinicalFeatures: {
    general: [
      'Anemia usually develops insidiously',
      'It is often more severe than its symptoms indicate because its slow evolution allows physiologic adaptation',
      'Occasionally, splenomegaly and hepatomegaly occur',
      'Various gastrointestinal symptoms, including weight loss and poorly localized abdominal pain, may occur',
      'Glossitis, usually described as burning of the tongue, is uncommon',
    ],
    specific: [
      'Neurologic symptoms develop independently from and often without hematologic abnormalities',
      'Subacute combined degeneration: degenerative changes affecting mostly brain and spinal cord white matter',
      'Demyelinating or axonal peripheral neuropathies',
      'Early stages: decreased position and vibratory sensation in the extremities, mild to moderate weakness, hyporeflexia',
      'Later stages: spasticity, extensor plantar responses, greater loss of position and vibratory sensation in the lower extremities, ataxia',
      'Deficits may develop in a stocking-glove distribution',
      'Tactile, pain, and temperature sensations are usually spared but may be difficult to assess in older adults',
      'Some patients are irritable and mildly depressed',
      'Paranoia (megaloblastic madness), delirium, confusion, and postural hypotension may occur in advanced cases',
      'Paresthesias can be the presenting manifestation, even before (or in the absence of) anemia',
    ],
  },
  treatment: [
    'Vitamin B12 1000\u20132000 mcg orally once a day: Can be given to patients who do not have severe deficiency or neurologic symptoms or signs. Large oral doses can be absorbed by mass action, even when intrinsic factor is absent.',
    'Nasal gel preparation: Available at a higher price',
    'For more severe deficiency: Vitamin B12 1 mg IM 1\u20134 times a week for several weeks until hematologic abnormalities are corrected; then once a month',
    'Monitoring: If the methylmalonic acid level does not decrease, patients may not be taking vitamin B12',
    'Duration: Hematologic abnormalities usually corrected within 6 weeks (reticulocyte count should improve within 1 week). Resolution of neurologic symptoms may take much longer. Neurologic symptoms persisting for months or years become irreversible. In most older adults with B12 deficiency and dementia, cognition does not improve after treatment.',
    'Lifelong treatment: Must be continued for life unless the pathophysiologic mechanism is corrected',
    'Infants of vegan mothers: Should receive supplemental vitamin B12 from birth',
    'CRITICAL CAUTION: Folate should not be used instead of vitamin B12 because folate may alleviate the anemia but allow neurologic deficits to progress.',
  ],
  keyClues: [
    'Macrocytosis (MCV > 100 fL) + hypersegmented neutrophils + macro-ovalocytes',
    'Low serum vitamin B12 (< 200 pg/mL)',
    'Elevated methylmalonic acid (distinguishes from folate deficiency)',
    'Neurologic symptoms (subacute combined degeneration, peripheral neuropathy) \u2014 unique to B12',
    'Paresthesias may be the presenting manifestation',
    'Schilling test confirms pernicious anemia',
    'Pancytopenia in severe cases',
  ],
  source:
    'Merck Manual \u2014 Vitamin B12 Deficiency (Professional, Jun 2026) and Megaloblastic Macrocytic Anemias (Professional, Mar 2025)',
};
