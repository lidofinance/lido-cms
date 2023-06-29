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
    { label: "Title", name: "title", widget: "text" },
    {
      label: "Short Info",
      name: "shortInfo",
      widget: "markdown",
      editor_components: [],
      buttons: ["link", "bold"],
      modes: ["rich_text"],
    },
    {
      label: "Precaution",
      name: "precaution",
      widget: "markdown",
      modes: ["rich_text"],
      editor_components: [],
      buttons: ["bold", "link"],
    },
    {
      name: "content",
      label: "Content",
      widget: "markdown",
      modes: ["rich_text"],
      buttons: [
        "link",
        "bold",
        "heading-two",
        "heading-three",
        "heading-four",
        "numbered-list",
      ],
      editor_components: [],
    },
  ],
};
