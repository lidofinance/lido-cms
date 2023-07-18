import type { CmsCollection } from "netlify-cms-core";

import { scorecard } from "./files/scorecard";
import { termsOfUse } from "./files/termsOfUse";
import { faq } from "./files/faq";
import { ecosystem } from "./files/ecosystem";
import { audits } from "./files/audits";
import { validators } from "./files/validators";
import { EcosystemConfigPreview } from "./EcosystemConfigPreview";

export const lidoLandingCollection: CmsCollection = {
  name: "lido-landing",
  label: "Lido landing",
  files: [scorecard, ecosystem, faq, validators, termsOfUse, audits],
};


export const registerEcosystemRenderer = () => {
  CMS.registerPreviewTemplate(ecosystem.name, EcosystemConfigPreview);
}
