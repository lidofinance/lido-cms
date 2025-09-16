import type { CmsCollection } from "decap-cms-core";

export const howLidoWorks: CmsCollection = {
  name: "HowLidoWorks",
  label: "How Lido works",
  folder: "lido-landing/how-lido-works",
  create: true,
  label_singular: "Article",
  slug: "{{fields.title}}",
  path: "{{fields.mainCategory}}/{{fields.subCategory}}/{{fields.order}}/{{slug}}",
  identifier_field: "title",
  summary:
    "{{fields.mainCategory}}/{{fields.subCategory}}/{{fields.order}}/{{slug}}",
  sortable_fields: ["path"],

  fields: [
    { label: "Title", name: "title", widget: "string", required: true },
    { label: "Main Category", name: "mainCategory", widget: "string" },
    {
      label: "Sub Category",
      name: "subCategory",
      widget: "string",
      required: false,
    },
    { label: "Order", name: "order", widget: "number", default: 0 },
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      editor_components: ["article-link", "image"],
    },
  ],
};
