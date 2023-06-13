import type { CmsCollection } from "netlify-cms-core";

import { project } from "./files/project";

export const ecosystemConfig: CmsCollection = {
  name: "ecosystem-config",
  label: "Ecosystem (Config)",
  hide: true,
  files: [project],
};
