import type { CmsCollection } from "netlify-cms-core";

import { scorecard } from "./files/scorecard";
import { termsOfUse } from "./files/termsOfUse";
import { faq } from "./files/faq";
import { ecosystem } from "./files/ecosystem";
import { validators } from "./files/validators";

export const lidoLanding: CmsCollection = {
  name: "lido-landing",
  label: "Lido landing",
  files: [scorecard, ecosystem, faq, validators, termsOfUse],
};
