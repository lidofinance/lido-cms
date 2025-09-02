import type { CmsCollection, CmsField } from "decap-cms-core";

export const howLidoWorks: CmsCollection = {
  name: "How Lido works",
  label: "How Lido works",
  folder: "lido-landing/howLidoWorks",
  create: true,
  label_singular: "Position",
  slug: "{{fields.slug}}",
  summary: `{{fields.mainCategory}}/{{fields.subCategory}}/{{fields.name}}`,
  sortable_fields: ["name"],
  editor: {
    preview: false,
  },
  fields: [
    {
      name: "id",
      widget: "uuid",
      hide: true,
    } as unknown as CmsField,
    { label: "Main Category", name: "mainCategory", widget: "string" },
    { label: "Sub Category", name: "subCategory", widget: "string" },
    { label: "Name", name: "name", widget: "string" },
    { label: "slug", name: "slug", widget: "string" },
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      editor_components: [],
    },
  ],
};
