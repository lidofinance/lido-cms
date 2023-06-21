import type { CmsCollection } from "netlify-cms-core";

import { scorecard } from "./files/scorecard";
import { faq } from "./files/faq";
import { ecosystem } from "./files/ecosystem";
import { audits } from "./files/audits";

export const lidoLanding: CmsCollection = {
  name: "lido-landing",
  label: "Lido landing",
  files: [scorecard, ecosystem, faq, audits],
};
