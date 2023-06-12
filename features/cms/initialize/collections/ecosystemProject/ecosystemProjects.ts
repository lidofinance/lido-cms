import type { CmsCollection, CmsField } from "netlify-cms-core";

export const ecosystemProjects: CmsCollection = {
  name: "ecosystem-projects",
  label: "Ecosystem (Projects)",
  folder: "public/lido-landing/ecosystem/projects",
  create: true,
  slug: "{{fields.id}}",
  fields: [
    {
      name: "id",
      widget: "uuid",
      hide: true,
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
