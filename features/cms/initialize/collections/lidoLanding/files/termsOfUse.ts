import type { CmsCollectionFile } from "netlify-cms-core";

export const termsOfUse: CmsCollectionFile = {
  name: "termsofuse",
  label: "Terms of use",
  description: "Terms of use page",
  file: "public/lido-landing/termsOfUse.md",
  fields: [
    { label: "Timestamp", name: "timestamp", widget: "datetime" },
    { label: "Title", name: "title", widget: "text" },
    { label: "Precaution", name: "precaution", widget: "markdown", editor_components: ["terms-precaution"] },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      buttons: ["heading-two", "link"],
      editor_components: ["scorecard-table"],
      modes: ["rich_text"],
    },
  ],
};
