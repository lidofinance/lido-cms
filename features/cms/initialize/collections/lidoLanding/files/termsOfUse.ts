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
      label: "Terms of use heading",
      name: "termsOfUseHeading",
      widget: "text",
    },
    {
      label: "Terms of use",
      name: "termsOfUse",
      widget: "list",
      fields: [
        {
          label: "Paragraph",
          name: "paragraph",
          widget: "markdown",
          modes: ["rich_text"],
          buttons: ["bold", "link"],
          editor_components: [],
        },
      ],
    },
    {
      name: "bindingProvisionsHeading",
      label: "Binding provisions heading",
      widget: "text",
    },
    {
      name: "bindingProvisions",
      label: "Binding Provisions",
      widget: "list",
      fields: [
        {
          name: "header",
          label: "Header",
          widget: "text",
        },
        {
          name: "paragraph",
          label: "Paragraph",
          widget: "markdown",
          modes: ["rich_text"],
          buttons: ["bold", "link", "numbered-list", "bulleted-list"],
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
