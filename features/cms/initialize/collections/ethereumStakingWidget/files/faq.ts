import type { CmsCollectionFile } from "netlify-cms-core";

export const faq: CmsCollectionFile = {
  name: "faq-on-ethereum-staking-widget",
  label: "FAQ on widget",
  description: "FAQ on widgets pages",
  file: "ethereum-staking-widget/faq.md",
  fields: [
    {
      widget: "list",
      name: "pages",
      label: "Pages",
      fields: [
        {
          widget: "string",
          name: "identification",
          label: "Identification",
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
    },
  ],
};
