import type { CmsCollectionFile, CmsField } from "netlify-cms-core";

export const vaultsInfo: CmsCollectionFile = {
  name: "vaultsInfo",
  label: "Vaults Info",
  description: "Vaults Info",
  file: "lido-landing/vaults-info.md",
  fields: [
    {
      widget: "boolean",
      name: "urgentBanner",
      label: "Urgent Banner",
      default: false
    },
    {
      widget: "list",
      name: "vaultsList",
      label: "List of vaults",
      summary: "{{fields.name}}",
      fields: [
        {
          widget: "uuid",
          name: "id",
          label: "Identifier",
        } as unknown as CmsField,
        {
          widget: "string",
          name: "name",
          label: "Name",
        },
        {
          widget: "boolean",
          name: "urgent",
          label: "Urgent",
          default: false
        },
        {
          widget: "boolean",
          name: "hide",
          label: "hide",
          default: false
        },
      ],
    },
  ],
};