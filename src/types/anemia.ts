export type Direction = 'up' | 'down' | 'normal' | 'variable' | 'na';

export type BranchKey =
  | 'microcytic' | 'normocytic' | 'macrocytic'
  | 'blood-loss' | 'decreased-production' | 'hemolysis'
  | 'genetic' | 'acquired' | 'hemolytic' | 'marrow-disorder';

export type LabRow = {
  label: string;
  value: string;
  direction?: Direction;   // omit if not applicable
  note?: string;           // optional "why" explanation
};

export type Anemia = {
  id: string;                       // kebab-case, e.g. "iron-deficiency-anemia"
  name: string;
  altNames: string[];
  definition: string;               // 1–2 sentences
  branches: BranchKey[];            // every branch this anemia belongs to
  inheritedOrAcquired: 'inherited' | 'acquired' | 'both';
  cause: string;
  pathophysiology: string;
  cbc: LabRow[];
  smear: string[];                  // morphology findings
  labs: LabRow[];
  diagnosis: string;
  clinicalFeatures: {
    general: string[];              // generic anemia symptoms
    specific: string[];             // disease-specific
    complications?: string[];
  };
  treatment: string[];              // list of bullet strings
  keyClues: string[];               // short, high-signal bullets
  source: string;                   // e.g. "Merck Manual — Iron Deficiency Anemia (Consumer, Apr 2026)"
};
