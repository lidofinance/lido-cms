import type { CmsCollection, CmsField } from "decap-cms-core";

export const ecosystemProjects: CmsCollection = {
  name: "ecosystem-projects",
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
      label: "Multichain Description",
      name: "l2Description",
      widget: "string",
      required: false,
    },
    {
      label: "Multichain Link",
      name: "l2Link",
      widget: "string",
      required: false,
    },
    {
      label: "Multichain feature",
      name: "multichainFeature",
      widget: "boolean",
      required: false,
    },
    {
      label: "Tokens",
      name: "tokens",
      widget: "relation",
      collection: "ecosystem-config",
      file: "project",
      search_fields: ["tokens.*.label"],
      value_field: "tokens.*.id",
      display_fields: ["tokens.*.label"],
      multiple: true,
    } as unknown as CmsField,
    {
      label: "Categories",
      name: "categories",
      widget: "relation",
      collection: "ecosystem-config",
      file: "project",
      search_fields: ["categories.*.label"],
      value_field: "categories.*.id",
      display_fields: ["categories.*.label"],
      multiple: true,
    } as unknown as CmsField,
    {
      label: "Networks",
      name: "networks",
      widget: "relation",
      collection: "ecosystem-config",
      file: "project",
      search_fields: ["networks.*.label"],
      value_field: "networks.*.id",
      display_fields: ["networks.*.label"],
      multiple: true,
    } as unknown as CmsField,
    { label: "Publish", name: "ready", widget: "boolean", default: false },
  ],
};
