import type { CmsCollection } from "netlify-cms-core";

import { sections } from "./files/sections";

export const lidoFaq: CmsCollection = {
  name: "lido-faq",
  label: "FAQ for lido.fi/faq",
  files: [sections],
};
