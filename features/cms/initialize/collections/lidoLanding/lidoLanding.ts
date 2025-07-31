import type { CmsCollection } from "decap-cms-core";

import { header } from "./files/header";
import { scorecard } from "./files/scorecard";
import { termsOfUse } from "./files/termsOfUse";
import { faq } from "./files/faq";
import { ecosystem } from "./files/ecosystem";
import { audits } from "./files/audits";
import { l2Audits } from "./files/l2Audits";
import { validators } from "./files/validators";
import { vaultsInfo } from "./files/vaultsInfo";
import { multichain } from "./files/multichain";
import { nodeOperators } from "./files/nodeOperators";
import { v3 } from "./files/v3";
import { featureFlags } from "./files/featureFlags";

export const lidoLanding: CmsCollection = {
  name: "lido-landing",
  label: "Lido landing",
  files: [
    header,
    scorecard,
    ecosystem,
    faq,
    validators,
    termsOfUse,
    audits,
    l2Audits,
    vaultsInfo,
    multichain,
    nodeOperators,
    v3,
    featureFlags,
  ],
};
