import type { Anemia, BranchKey } from '../types/anemia';
import { anemias } from './anemias';

export type BranchGroup = {
  key: 'mcv' | 'mechanism' | 'etiology';
  label: string;
  accentVar: string;   // CSS variable name, e.g. '--color-mcv'
  branches: { key: BranchKey; label: string }[];
};

export const branchGroups: BranchGroup[] = [
  {
    key: 'mcv',
    label: 'By MCV',
    accentVar: '--color-mcv',
    branches: [
      { key: 'microcytic', label: 'Microcytic' },
      { key: 'normocytic', label: 'Normocytic' },
      { key: 'macrocytic', label: 'Macrocytic' },
    ],
  },
  {
    key: 'mechanism',
    label: 'By Mechanism',
    accentVar: '--color-mechanism',
    branches: [
      { key: 'blood-loss', label: 'Blood Loss' },
      { key: 'decreased-production', label: 'Decreased / Ineffective Production' },
      { key: 'hemolysis', label: 'Increased Destruction / Hemolysis' },
    ],
  },
  {
    key: 'etiology',
    label: 'Special / Etiology',
    accentVar: '--color-etiology',
    branches: [
      { key: 'genetic', label: 'Genetic / Inherited' },
      { key: 'acquired', label: 'Acquired' },
      { key: 'hemolytic', label: 'Hemolytic' },
      { key: 'marrow-disorder', label: 'Bone Marrow / Marrow Disorders' },
    ],
  },
];

export function getAnemiasForBranch(branch: BranchKey): Anemia[] {
  return anemias.filter((a) => a.branches.includes(branch));
}
