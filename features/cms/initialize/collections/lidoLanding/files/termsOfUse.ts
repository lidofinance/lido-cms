import type { CmsCollectionFile } from "netlify-cms-core";

export const termsOfUse: CmsCollectionFile = {
  name: "termsofuse",
  label: "Terms of use",
  description: "Terms of use page",
  file: "lido-landing/termsOfUse.md",
  fields: [
    {
      label: "Timestamp",
      name: "timestamp",
      widget: "datetime",
      format: "MMMM DD, YYYY",
    },
    {
      name: "content",
      label: "Content",
      widget: "markdown",
      modes: ["rich_text"],
      buttons: [
        "link",
        "bold",
        "heading-one",
        "heading-two",
        "heading-three",
        "heading-four",
        "numbered-list",
        "quote",
      ],
      editor_components: [],
    },
  ],
};
