import type { CmsCollectionFile } from "netlify-cms-core";

export const withdrawalsPageClaimTab: CmsCollectionFile = {
  name: "faq-withdrawals-claim-page",
  label: "FAQ on Withdrawals page -> Claim tab",
  description: "FAQ on Withdrawals page -> Claim tab",
  file: "ethereum-staking-widget/faq-withdrawals-page-claim-tab.md",
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
