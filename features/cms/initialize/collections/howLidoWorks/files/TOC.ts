import type { CmsCollectionFile } from "decap-cms-core";

export const howLidoWorksTOC: CmsCollectionFile = {
  name: "HowLidoWorksTOC",
  label: "Table of Contents",
  file: "lido-landing/how-lido-works/toc.md",
  fields: [
    {
      label: "Main Categories",
      name: "mainCategories",
      widget: "list",
      summary: "{{fields.categoryName}}",
      fields: [
        {
          name: "categoryName",
          label: "Main Category Name",
          widget: "string",
          required: true,
          hint: "Top-level category",
        },
        {
          label: "Categories",
          name: "categories",
          widget: "list",
          summary: "{{fields.categoryName}}",
          fields: [
            {
              name: "categoryName",
              label: "Category Name",
              widget: "string",
              hint: "Leave empty for articles without sub category",
              required: false,
            },
            {
              label: "Articles",
              name: "articles",
              widget: "list",
              summary: "{{fields.article}}",
              fields: [
                {
                  name: "article",
                  label: "Article",
                  widget: "relation",
                  collection: "HowLidoWorksArticle",
                  search_fields: ["title"],
                  display_fields: ["title"],
                  value_field: "{{id}}",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
