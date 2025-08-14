import type { CmsCollection, CmsField } from "decap-cms-core";

export const opportunities: CmsCollection = {
  name: "opportunities",
  label: "Opportunities",
  folder: "lido-landing/opportunities/projects",
  create: true,
  label_singular: "Position",
  slug: "{{fields.id}}",
  summary: `{{fields.name}}`,
  sortable_fields: [],
  view_filters: [
    { label: "Published", field: "isPublished", pattern: "true" },
    { label: "Not published", field: "isPublished", pattern: "false" },
  ],
  editor: {
    preview: false,
  },
  fields: [
    {
      name: "id",
      widget: "uuid",
      hide: true,
    } as unknown as CmsField,
    { label: "Name", name: "name", widget: "string" },
    { label: "Work Model", name: "workModel", widget: "string" },
    { label: "Team", name: "team", widget: "string" },
    { label: "Link", name: "link", widget: "string" },
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      editor_components: [],
    },
    {
      label: "Published",
      name: "isPublished",
      widget: "boolean",
      default: false,
    },
  ],
};
