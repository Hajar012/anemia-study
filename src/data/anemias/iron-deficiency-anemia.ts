import type { Anemia } from '../../types/anemia';

export const ironDeficiencyAnemia: Anemia = {
  id: 'iron-deficiency-anemia',
  name: 'Iron Deficiency Anemia',
  altNames: [],
  definition:
    'Results from low or depleted stores of iron, which is needed to produce red blood cells.',
  branches: ['microcytic', 'decreased-production', 'acquired'],
  inheritedOrAcquired: 'acquired',
  cause:
    'Excessive bleeding is the most common cause. In males and females who have stopped menstruating, iron deficiency usually indicates bleeding in the digestive tract. In females who have menstrual periods, menstrual bleeding is the most common cause. May also result from too little iron in the diet during times of increased requirements (infants, young children, adolescent females, pregnant people). Decreased iron absorption (malabsorption) can result from disorders including celiac disease.',
  pathophysiology:
    'Iron deficiency anemia usually develops slowly because it may take several months for the body\u2019s iron reserves to be used up. As iron reserves decrease, the bone marrow gradually produces fewer red blood cells. When reserves are depleted, the red blood cells are not only fewer in number but also abnormally small and pale.',
  cbc: [
    { label: 'MCV', value: 'Low (microcytic)', direction: 'down' },
    { label: 'MCH/MCHC', value: 'Low (hypochromic)', direction: 'down' },
    { label: 'RBC count', value: 'Decreased', direction: 'down' },
    { label: 'Hemoglobin/Hematocrit', value: 'Decreased', direction: 'down' },
    {
      label: 'Reticulocyte count',
      value: 'Inappropriately low (hypoproliferative)',
      direction: 'down',
    },
  ],
  smear: ['Red blood cells tend to be small and pale.'],
  labs: [
    {
      label: 'Ferritin',
      value: 'Decreased (most accurate test for iron deficiency)',
      direction: 'down',
      note: 'Can be falsely elevated (appear normal) due to liver damage, inflammation, infection, or cancer.',
    },
    {
      label: 'Serum iron',
      value: 'Decreased (measured and compared with transferrin)',
      direction: 'down',
    },
    {
      label: 'Transferrin/TIBC',
      value: 'Increased (transferrin is the protein that carries iron when not inside RBCs)',
      direction: 'up',
    },
  ],
  diagnosis:
    'Once blood tests show anemia, tests for iron deficiency are often done. The most accurate test is measurement of blood ferritin level. A low ferritin indicates iron deficiency.',
  clinicalFeatures: {
    general: ['Fatigue', 'Weakness', 'Paleness (develop gradually)'],
    specific: [
      'Pica \u2014 craving to ingest something, most commonly ice, sometimes dirt, clay, or chalk',
    ],
  },
  treatment: [
    'Stopping bleeding: First step is to locate source and stop bleeding',
    'Iron supplements: Lost iron must be replaced by taking iron supplements; correcting anemia usually takes 3 to 6 weeks',
    'Administration: Usually oral; absorbed best with least side effects when taken every other day; should not be taken with food; vitamin C may improve absorption; dairy/calcium block absorption',
    'Duration: Typically continued for 6 months after blood counts return to normal to fully replenish reserves',
    'IV iron: Sometimes given when large amounts needed or oral not tolerated',
  ],
  keyClues: [
    'Low ferritin (most accurate test)',
    'Low serum iron + low transferrin saturation',
    'High TIBC/transferrin',
    'Microcytic, hypochromic RBCs',
    'Pica in severe cases',
  ],
  source: 'Merck Manual \u2014 Iron Deficiency Anemia (Consumer Version, Apr 2026)',
};
