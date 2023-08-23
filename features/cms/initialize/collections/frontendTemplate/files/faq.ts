import type { CmsCollectionFile } from "netlify-cms-core";

export const faq: CmsCollectionFile = {
  name: "faq-on-widget",
  label: "FAQ on widget",
  description: "FAQ on widgets pages",
  file: "widget-frontend-template/faq.md",
  fields: [
    {
      widget: "list",
      name: "pages",
      label: "Pages",
      fields: [
        {
          widget: "string",
          name: "name",
          label: "Name",
        },
        {
          widget: "list",
          name: "q&a",
          label: "Q&A",
          fields: [
            {
              name: "question",
              label: "Question",
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
