import type { CmsCollection, CmsField } from "decap-cms-core";

export const banners: CmsCollection = {
  name: "banners",
  label: "Banners",
  folder: "banners",
  create: true,
  label_singular: "Projects",
  slug: "{{fields.id}}",
  summary: `{{fields.projectName}}`,
  sortable_fields: [],
  editor: {
    preview: false,
  },
  fields: [
    {
      name: "id",
      label: "identifier",
      widget: "uuid",
    } as unknown as CmsField,
    { label: "Project Name", name: "projectName", widget: "string" },
    {
      widget: "list",
      name: "banners",
      label: "List of Bannres",
      label_singular: "Banner",
      summary: "{{fields.title}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Description", name: "description", widget: "string" },
        { label: "Link", name: "link", widget: "string" },
        {
          label: "Cookie Name",
          name: "cookieName",
          widget: "string",
          pattern: [
            "^[a-z0-9_]+$",
            "field should contain only letters (lower case), numbers, and underscore",
          ],
        },
        {
          widget: "list",
          name: "pages",
          label: "List of pages",
          label_singular: "Page",
          summary: "{{fields.path}}",
          fields: [{ label: "Path", name: "path", widget: "string" }],
        },
      ],
    },
  ],
};
