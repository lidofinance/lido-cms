import type { CmsCollection } from "netlify-cms-core";

import { scorecard } from "./files/scorecard";
import { termsOfUse } from "./files/termsOfUse";

export const lidoLanding: CmsCollection = {
  name: "lido-landing",
  label: "Lido landing",
  files: [scorecard, termsOfUse],
};
