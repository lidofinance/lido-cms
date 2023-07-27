import type { CmsCollectionFile, CmsField } from "netlify-cms-core";

export const FILE_NAME = "project";

export const project: CmsCollectionFile = {
  name: FILE_NAME,
  label: "Project",
  description: "Config for ecosystem project",
  file: "lido-landing/ecosystem/config/project.md",
  fields: [
    {
      name: "tokens",
      label: "Tokens",
      widget: "list",
      label_singular: "new token",
      summary: "{{fields.label}}",
      fields: [
        {
          name: "id",
          widget: "uuid",
          hide: true,
        } as unknown as CmsField,
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
        {
          label: "Logo",
          name: "logo",
          widget: "svg",
        } as unknown as CmsField,
      ],
    },
    {
      name: "categories",
      label: "Categories",
      widget: "list",
      label_singular: "new category",
      summary: "{{fields.label}}",
      fields: [
        {
          name: "id",
          widget: "uuid",
          hide: true,
        } as unknown as CmsField,
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
      ],
    },
    {
      name: "networks",
      label: "Networks",
      widget: "list",
      label_singular: "new network",
      summary: "{{fields.label}}",
      fields: [
        {
          name: "id",
          widget: "uuid",
          hide: true,
        } as unknown as CmsField,
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
        {
          label: "Logo",
          name: "logo",
          widget: "svg",
        } as unknown as CmsField,
      ],
    },
  ],
};
