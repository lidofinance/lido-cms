import type { CmsCollection } from "netlify-cms-core";

import { indexPage } from "./files/indexPage";
import { examplePage } from "./files/examplePage";

export const frontendTemplate: CmsCollection = {
  name: "frontend-template",
  label: "Frontend Template",
  files: [indexPage, examplePage],
};
