import type { CmsCollection } from "netlify-cms-core";

import { faq } from "./files/faq";

export const frontendTemplate: CmsCollection = {
  name: "frontend-template",
  label: "Frontend template",
  files: [faq],
};
