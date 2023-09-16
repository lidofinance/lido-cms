import type { CmsCollection } from "netlify-cms-core";

import { faq } from "./files/faq";

export const ethereumStakingWidget: CmsCollection = {
  name: "ethereum-staking-widget",
  label: "Ethereum staking widget",
  files: [faq],
};
