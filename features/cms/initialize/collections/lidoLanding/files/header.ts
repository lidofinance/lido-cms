import type { CmsCollectionFile, CmsField } from "decap-cms-core";

export const header: CmsCollectionFile = {
  name: "header",
  label: "Header",
  description: "Header",
  file: "lido-landing/header.md",
  fields: [
    {
      widget: "list",
      name: "ecosystemProjects",
      label: "stETH in the ecosystem",
      summary: "{{fields.label}}",
      label_singular: "new ecosystem project",
      fields: [
        {
          widget: "svg",
          name: "logo",
          label: "Logo",
        } as unknown as CmsField,
        {
          widget: "svg",
          name: "darkLogo",
          label: "Logo for dark theme",
          required: false,
        } as unknown as CmsField,
        {
          widget: "string",
          name: "label",
          label: "Label",
        },
        {
          widget: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      widget: "list",
      name: "integrations",
      label: "Integrations",
      summary: "{{fields.label}}",
      label_singular: "new integration",
      fields: [
        {
          widget: "svg",
          name: "logo",
          label: "Logo",
        } as unknown as CmsField,
        {
          widget: "svg",
          name: "darkLogo",
          label: "Logo for dark theme",
          required: false,
        } as unknown as CmsField,
        {
          widget: "string",
          name: "label",
          label: "Label",
        },
        {
          widget: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      widget: "string",
      name: "noCommunityCallLink",
      label: "Node Operator community call link",
    },
  ],
};
