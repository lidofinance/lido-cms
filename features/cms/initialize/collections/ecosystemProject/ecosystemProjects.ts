import type { CmsCollection, CmsField } from "netlify-cms-core";

export const FILE_NAME = "ecosystem-projects";

export const ecosystemProjects: CmsCollection = {
  name: FILE_NAME,
  label: "Ecosystem (Projects)",
  folder: "lido-landing/ecosystem/projects",
  create: true,
  slug: "{{fields.id}}",
  summary: `{{fields.name}}`,
  sortable_fields: [],
  view_filters: [
    { label: "Published", field: "ready", pattern: "true" },
    { label: "Not published", field: "ready", pattern: "false" },
  ],
  fields: [
    {
      name: "id",
      widget: "uuid",
      hide: true,
    } as unknown as CmsField,
    {
      name: "info",
      label: "Info",
      widget: "info",
      required: false,
      data: [
        {
          description:
            "To add/update/delete tokens/categories/networks, follow the link below:",
          links: [
            [
              "Go to project config",
              "http://localhost:3001/admin/#/collections/ecosystem-config/entries/project",
            ],
          ],
        },
      ],
    } as unknown as CmsField,
    { label: "Logo", name: "logo", widget: "svg" } as unknown as CmsField,
    { label: "Name", name: "name", widget: "string" },
    { label: "Description", name: "description", widget: "string" },
    { label: "Link", name: "link", widget: "string" },
    {
      label: "Learn more link",
      name: "learnMoreLink",
      widget: "string",
      required: false,
    },
    {
      label: "Tokens",
      name: "tokens",
      widget: "relation",
      collection: "ecosystem-config",
      file: "project",
      searchFields: ["tokens.*.label"],
      valueField: "tokens.*.id",
      displayFields: ["tokens.*.label"],
      multiple: true,
    } as unknown as CmsField,
    {
      label: "Categories",
      name: "categories",
      widget: "relation",
      collection: "ecosystem-config",
      file: "project",
      searchFields: ["categories.*.label"],
      valueField: "categories.*.id",
      displayFields: ["categories.*.label"],
      multiple: true,
    } as unknown as CmsField,
    {
      label: "Networks",
      name: "networks",
      widget: "relation",
      collection: "ecosystem-config",
      file: "project",
      searchFields: ["networks.*.label"],
      valueField: "networks.*.id",
      displayFields: ["networks.*.label"],
      multiple: true,
    } as unknown as CmsField,
    { label: "Publish", name: "ready", widget: "boolean", default: false },
  ],
};
