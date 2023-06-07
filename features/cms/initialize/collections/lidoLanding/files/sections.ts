import type { CmsCollectionFile } from "netlify-cms-core";

export const sections: CmsCollectionFile = {
  name: "faq",
  label: "FAQ",
  description: "FAQ page",
  file: "lido-landing/sections.md",
  fields: [
    {
      widget: "list",
      name: "sections",
      label: "Sections",
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
              modes: ["rich_text"],
              buttons: ["link", "bulleted-list", "bold"],
            },
          ],
        },
      ],
    },
  ],
};
