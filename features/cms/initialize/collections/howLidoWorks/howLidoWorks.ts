import type { CmsCollection } from "decap-cms-core";

export const howLidoWorks: CmsCollection = {
  name: "HowLidoWorks",
  label: "How Lido works",
  folder: "lido-landing/how-lido-works",
  create: true,
  label_singular: "Article",
  slug: "{{fields.order}}-{{fields.name}}",
  summary: `{{fields.mainCategory}}/{{fields.subCategory}}/{{fields.order}}{{fields.name}}`,
  path: "{{fields.mainCategory}}-{{fields.subCategory}}-{{fields.order}}-{{fields.name}}",
  editor: {
    preview: false,
  },
  identifier_field: "slug",
  fields: [
    { label: "Name", name: "name", widget: "string" },
    { label: "Main Category", name: "mainCategory", widget: "string" },
    {
      label: "Sub Category",
      name: "subCategory",
      widget: "string",
      required: false,
      hint: "If empty, the article will appear as a top-level item in the main category",
    },
    {
      label: "Order",
      name: "order",
      widget: "number",
      default: 0,
      hint: "Order of appearance in the subcategory list",
    },
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      editor_components: ["article-link"],
    },
  ],
};
