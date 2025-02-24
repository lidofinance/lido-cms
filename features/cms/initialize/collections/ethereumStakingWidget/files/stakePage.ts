import type { CmsCollectionFile } from "decap-cms-core";

export const stakePage: CmsCollectionFile = {
  name: "faq-stake-page",
  label: "FAQ on Stake page",
  description: "FAQ on Stake page",
  file: "ethereum-staking-widget/faq-stake-page.md",
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
