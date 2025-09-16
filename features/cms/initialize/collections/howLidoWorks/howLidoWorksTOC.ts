import type { CmsCollection } from "decap-cms-core";

export const howLidoWorksTOC: CmsCollection = {
  name: "HowLidoWorksTOC",
  label: "How Lido Works - Table of Contents",
  folder: "lido-landing/how-lido-works-toc",
  create: true,
  label_singular: "Table of Contents",
  summary: "Articles Order",

  fields: [
    {
      label: "Articles Order",
      name: "articlesOrder",
      widget: "list",

      fields: [
        {
          name: "article",
          label: "Article",
          widget: "relation",
          collection: "HowLidoWorks",
          search_fields: ["title"],
          value_field: "slug",
          display_fields: ["title", "mainCategory", "subCategory"],
        },
      ],
    },
  ],
};
