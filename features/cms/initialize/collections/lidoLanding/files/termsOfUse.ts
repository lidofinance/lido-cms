import type { CmsCollectionFile } from "netlify-cms-core";

export const termsOfUse: CmsCollectionFile = {
  name: "termsofuse",
  label: "Terms of use",
  description: "Terms of use page",
  file: "public/lido-landing/termsOfUse.md",
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
      widget: "list",
      fields: [
        {
          label: "Paragraph",
          name: "paragraph",
          widget: "text",
        },
      ],
    },
    {
      name: "content",
      label: "Content",
      widget: "list",
      fields: [
        {
          name: "paragraph",
          label: "Paragraph",
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
    },
    {
      name: "footerText",
      label: "Footer text",
      widget: "text",
    },
  ],
};
