import type { CmsCollectionFile, CmsField } from "decap-cms-core";

export const project: CmsCollectionFile = {
  name: "project-steth-in-defi-config",
  label: "Project",
  description: "Config for 'stETH in DEFI' project",
  file: "lido-landing/steth-in-defi/config/project.md",
  fields: [
    {
      name: "curators",
      label: "Curators",
      widget: "list",
      label_singular: "new curator",
      summary: "{{fields.label}}",
      fields: [
        {
          name: "id",
          widget: "uuid",
          hide: true,
        } as unknown as CmsField,
        {
          label: "Logo",
          name: "logo",
          widget: "svg",
        } as unknown as CmsField,
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
      ],
    },
    {
      name: "depositableTokens",
      label: "Depositable tokens",
      widget: "list",
      label_singular: "new depositable token",
      summary: "{{fields.label}}",
      fields: [
        {
          name: "id",
          widget: "uuid",
          hide: true,
        } as unknown as CmsField,
        {
          label: "Logo",
          name: "logo",
          widget: "svg",
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
          label: "Logo",
          name: "logo",
          widget: "svg",
        } as unknown as CmsField,
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
      ],
    },
    {
      name: "additionalRewards",
      label: "Additional Rewards",
      widget: "list",
      label_singular: "new additional reward",
      summary: "{{fields.label}}",
      fields: [
        {
          name: "id",
          widget: "uuid",
          hide: true,
        } as unknown as CmsField,
        {
          label: "Logo",
          name: "logo",
          widget: "svg",
        } as unknown as CmsField,
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
      ],
    },
  ],
};
