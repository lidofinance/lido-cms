import type { CmsCollectionFile } from "decap-cms-core";

export const faq: CmsCollectionFile = {
  name: "faq",
  label: "FAQ",
  description: "FAQ page",
  file: "lido-landing/faq.md",
  fields: [
    {
      widget: "list",
      name: "categories",
      label: "Categories",
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
