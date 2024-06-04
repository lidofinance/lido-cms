import type { CmsCollection } from "netlify-cms-core";

import { scorecard } from "./files/scorecard";
import { termsOfUse } from "./files/termsOfUse";
import { faq } from "./files/faq";
import { ecosystem } from "./files/ecosystem";
import { audits } from "./files/audits";
import { l2Audits } from "./files/l2Audits";
import { validators } from "./files/validators";
import { vaultsInfo } from "./files/vaultsInfo";

export const lidoLanding: CmsCollection = {
  name: "lido-landing",
  label: "Lido landing",
  files: [scorecard, ecosystem, faq, validators, termsOfUse, audits, l2Audits, vaultsInfo],
};
