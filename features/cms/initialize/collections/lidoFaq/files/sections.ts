import type { CmsCollectionFile } from "netlify-cms-core";

export const sections: CmsCollectionFile = {
  name: "faq",
  label: "lido.fi/faq",
  description: "FAQ page",
  file: "lido-faq/sections.md",
  fields: [
    {
      widget: "list",
      name: "sections",
      label: "Sections",
      fields: [
        {
          widget: "string",
          name: "section_name",
          label: "Section name",
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
            },
          ],
        },
      ],
    },
  ],
};
