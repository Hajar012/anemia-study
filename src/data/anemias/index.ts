import type { Anemia } from '../../types/anemia';
import { bloodLossAnemia } from './blood-loss-anemia';
import { anemiaOfChronicDisease } from './anemia-of-chronic-disease';
import { anemiaOfRenalDisease } from './anemia-of-renal-disease';
import { aplasticAnemia } from './aplastic-anemia';
import { autoimmuneHemolyticAnemia } from './autoimmune-hemolytic-anemia';
import { folateDeficiency } from './folate-deficiency';
import { g6pdDeficiency } from './g6pd-deficiency';
import { hereditarySpherocytosisAndElliptocytosis } from './hereditary-spherocytosis-elliptocytosis';
import { ironDeficiencyAnemia } from './iron-deficiency-anemia';
import { myelodysplasticSyndromes } from './myelodysplastic-syndromes';
import { sickleCellDisease } from './sickle-cell-disease';
import { sideroblasticAnemias } from './sideroblastic-anemias';
import { thalassemias } from './thalassemias';
import { vitaminB12Deficiency } from './vitamin-b12-deficiency';

export const anemias: Anemia[] = [
  bloodLossAnemia,
  anemiaOfChronicDisease,
  anemiaOfRenalDisease,
  aplasticAnemia,
  autoimmuneHemolyticAnemia,
  folateDeficiency,
  g6pdDeficiency,
  hereditarySpherocytosisAndElliptocytosis,
  ironDeficiencyAnemia,
  myelodysplasticSyndromes,
  sickleCellDisease,
  sideroblasticAnemias,
  thalassemias,
  vitaminB12Deficiency,
];
