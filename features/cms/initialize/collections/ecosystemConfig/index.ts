import type { CmsCollection } from "netlify-cms-core";

import { project } from "./files/project";

export const ecosystemConfigCollection: CmsCollection = {
  name: "ecosystem-config",
  label: "Ecosystem (Config)",
  files: [project],
};
