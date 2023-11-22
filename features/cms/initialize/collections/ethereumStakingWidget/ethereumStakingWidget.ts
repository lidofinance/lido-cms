import type { CmsCollection } from "netlify-cms-core";

import { stakePage } from "./files/stakePage";
import { wrapAndUnwrapPage } from "./files/wrapAndUnwrapPage";
import { withdrawalsPageClaimTab } from "./files/withdrawalsPageClaimTab";
import { withdrawalsPageRequestTab } from "./files/withdrawalsPageRequestTab";

export const ethereumStakingWidget: CmsCollection = {
  name: "ethereum-staking-widget",
  label: "Ethereum Staking Widget",
  files: [
    stakePage,
    wrapAndUnwrapPage,
    withdrawalsPageClaimTab,
    withdrawalsPageRequestTab,
  ],
};
