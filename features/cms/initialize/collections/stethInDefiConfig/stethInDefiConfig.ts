import type { CmsCollection } from "decap-cms-core";

import { project } from "./files/project";

export const stethInDefiConfig: CmsCollection = {
  name: "steth-in-defi-config",
  label: "stETH in DEFI (Config)",
  editor: {
    preview: false,
  },
  files: [project],
};
