import type { CmsCollectionFile } from "decap-cms-core";

export const indexPage: CmsCollectionFile = {
  name: "faq-index-page",
  label: "FAQ on Index page",
  description: "FAQ on Index page",
  file: "widget-frontend-template/faq-index-page.md",
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
