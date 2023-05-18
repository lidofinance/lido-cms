import type { CmsCollection } from "netlify-cms-core";

import { scorecard } from "./files/scorecard";
import { ecosystem } from "./files/ecosystem";

export const lidoLanding: CmsCollection = {
  name: "lido-landing",
  label: "Lido landing",
  files: [
    scorecard,
    ecosystem
  ],
};
