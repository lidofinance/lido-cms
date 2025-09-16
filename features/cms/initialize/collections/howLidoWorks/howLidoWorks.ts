import type { CmsCollection, CmsField } from "decap-cms-core";

export const howLidoWorks: CmsCollection = {
  name: "HowLidoWorks",
  label: "How Lido works",
  folder: "lido-landing/how-lido-works",
  create: true,
  identifier_field: "title",
  summary: `{{fields.mainCategory}}{{fields.subCategory}}/{{fields.order}}/{{fields.title}}`,
  slug: "{{fields.id}}",
  fields: [
    {
      name: "id",
      label: "identifier",
      widget: "uuid",
      hide: true,
    } as unknown as CmsField,
    { label: "Title", name: "title", widget: "string", required: true },
    {
      label: "Slug",
      name: "slug",
      widget: "string",
      required: false,
      default: "",
      hint: "Auto-generated if left empty",
    },
    { label: "Main Category", name: "mainCategory", widget: "string" },
    {
      label: "Sub Category",
      name: "subCategory",
      widget: "string",
      required: false,
    },
    { label: "Order", name: "order", widget: "number", default: 1 },
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      editor_components: ["article-link", "image"],
    },
  ],
};
