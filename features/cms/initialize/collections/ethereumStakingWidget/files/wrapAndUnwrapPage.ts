import type { CmsCollectionFile } from "decap-cms-core";

export const wrapAndUnwrapPage: CmsCollectionFile = {
  name: "faq-wrap-and-unwrap-page",
  label: "FAQ on Wrap and Unwrap page",
  description: "FAQ on Wrap and Unwrap page",
  file: "ethereum-staking-widget/faq-wrap-and-unwrap-page.md",
  fields: [
    {
      widget: "string",
      name: "pageIdentification",
      label: "Page Identification",
    },
    {
      widget: "list",
      name: "faq",
      label: "FAQ",
      fields: [
        {
          name: "question",
          label: "Question",
          widget: "string",
        },
        {
          name: "questionId",
          label: "Question Id",
          widget: "string",
        },
        {
          name: "answer",
          label: "Answer",
          widget: "markdown",
          editor_components: [],
          modes: ["rich_text"],
          buttons: ["link", "bulleted-list", "bold"],
        },
      ],
    },
  ],
};
