import type { Anemia } from '../../types/anemia';

export const bloodLossAnemia: Anemia = {
  id: 'blood-loss-anemia',
  name: 'Anemia Due to Excessive Bleeding',
  altNames: ['Blood loss anemia', 'hemorrhagic anemia'],
  definition:
    'Anemia resulting when loss of red blood cells exceeds production of new red blood cells.',
  branches: ['normocytic', 'microcytic', 'blood-loss', 'acquired'],
  inheritedOrAcquired: 'acquired',
  cause:
    'Excessive bleeding is the most common cause of anemia. Causes by type:\n\nRapid blood loss:\n- Injury\n- Surgery\n- Childbirth\n- Ruptured blood vessel\n\nChronic blood loss:\n- Ulcers in the stomach or small intestine\n- Polyps in the large intestine\n- Cancers in the large intestine\n- Kidney tumors or bladder tumors (may cause blood to be lost in the urine)\n- Heavy menstrual bleeding\n- Nosebleeds\n- Hemorrhoids\n\nChronic blood loss is far more common than sudden loss of blood. Small amounts of bleeding may not be noticed (occult blood loss).',
  pathophysiology:
    'When blood is lost, the body quickly pulls water from tissues outside the bloodstream in an attempt to keep the blood vessels filled. As a result, the blood is diluted, and the hematocrit is reduced. Eventually, increased production of red blood cells by the bone marrow may correct the anemia. However, over time, bleeding reduces the amount of iron in the body, so that the bone marrow is not able to increase production of new red blood cells to replace those lost.',
  cbc: [
    {
      label: 'MCV',
      value:
        'Variable. In rapid blood loss, initially normocytic. In chronic blood loss, may become microcytic as iron stores are depleted.',
      direction: 'variable',
    },
    {
      label: 'Hemoglobin/Hematocrit',
      value: 'Reduced (hematocrit is reduced as blood is diluted)',
      direction: 'down',
    },
    {
      label: 'Reticulocyte count',
      value:
        'Initially increased as bone marrow attempts to compensate; may become inadequate in chronic blood loss as iron is depleted',
      direction: 'up',
    },
  ],
  smear: ['Not specified by source.'],
  labs: [
    { label: 'CBC', value: 'Detects anemia' },
    {
      label: 'Stool and urine tests',
      value: 'For blood, to identify source of bleeding',
    },
    {
      label: 'Iron studies',
      value:
        'May show iron deficiency in chronic blood loss as iron is lost with bleeding',
    },
  ],
  diagnosis:
    'Doctors do blood tests to detect anemia when people describe symptoms of anemia, have noticed bleeding, or both. Stool and urine are tested for blood in an effort to identify the source of bleeding. Imaging tests or endoscopy may be needed to identify the source of bleeding.',
  clinicalFeatures: {
    general: [
      'Symptoms are similar to those of other types of anemia and vary from mild to severe, depending on how much blood is lost and how rapidly it is lost',
    ],
    specific: [
      'Rapid blood loss: Symptoms may be severe initially, especially if anemia develops rapidly',
      'Rapid blood loss: Blood pressure falls because the amount of fluid left in the blood vessels is insufficient',
      'Rapid blood loss: The body\u2019s oxygen supply is drastically reduced because the number of oxygen-carrying red blood cells has decreased so quickly',
      'Rapid blood loss: Dizziness upon sitting or standing after lying down (orthostatic hypotension) is common',
      'Rapid blood loss: Losing one-third of blood volume over several hours or less can be fatal',
      'Rapid blood loss: Either problem may lead to a heart attack, stroke, or death',
      'Chronic blood loss: The anemia generally causes fewer symptoms and may cause only fatigue and weakness, or no symptoms at all',
      'Chronic blood loss: People may notice black, tarry stools if they have bleeding from the stomach or small intestine',
      'Chronic blood loss: Bleeding from the kidneys or bladder may cause red or brown urine',
      'Chronic blood loss: Females may notice long, heavy menstrual periods',
      'Chronic blood loss: Some disorders that cause chronic bleeding, such as stomach ulcers, cause abdominal discomfort',
      'Chronic blood loss: Other disorders, such as diverticulosis and intestinal cancers and polyps at an early stage, cause no symptoms',
    ],
  },
  treatment: [
    'Stopping bleeding: For large or rapid blood loss, the source of bleeding must be found and the bleeding stopped',
    'Transfusion of red blood cells: May be needed for rapid or large blood loss',
    'Iron supplements: Most people who have anemia due to bleeding need to take iron supplements, usually tablets, for several months. Because iron, which is required to produce red blood cells, is lost as a result of bleeding.',
    'Intravenous iron: Sometimes given',
    'With slow or small blood loss, the body may produce enough red blood cells to correct the anemia without the need for blood transfusions once the bleeding is stopped',
  ],
  keyClues: [
    'History of bleeding (acute or chronic)',
    'Rapid blood loss: hypotension, orthostatic hypotension, dizziness',
    'Chronic blood loss: fatigue, weakness, pallor; may be occult',
    'Iron deficiency develops in chronic blood loss',
    'Low hematocrit with evidence of bleeding source',
    'Positive stool or urine blood tests',
  ],
  source:
    'Merck Manual \u2014 Anemia Due to Excessive Bleeding (Consumer, Apr 2026) and Overview of Anemia (Professional)',
};
