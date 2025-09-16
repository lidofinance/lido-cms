import type { CmsCollectionFile } from "decap-cms-core";

export const howLidoWorksTOC: CmsCollectionFile = {
  name: "HowLidoWorksMainCategories",
  label: "Main categories",
  file: "lido-landing/how-lido-works-toc/toc.md",
  label_singular: "Table of Contents",

  fields: [
    {
      label: "Articles Order",
      name: "articlesOrder",
      widget: "list",

      fields: [
        {
          name: "article",
          label: "Article",
          widget: "string",
        },
      ],
    },
  ],
};
