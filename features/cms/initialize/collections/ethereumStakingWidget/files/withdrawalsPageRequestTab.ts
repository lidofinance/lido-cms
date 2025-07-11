import type { CmsCollectionFile } from "decap-cms-core";

export const withdrawalsPageRequestTab: CmsCollectionFile = {
  name: "faq-withdrawals-request-page",
  label: "FAQ on Withdrawals page -> Request tab",
  description: "FAQ on Withdrawals page -> Request tab",
  file: "ethereum-staking-widget/faq-withdrawals-page-request-tab.md",
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
