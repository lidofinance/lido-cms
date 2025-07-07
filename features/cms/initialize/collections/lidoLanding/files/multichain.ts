import type { CmsCollectionFile, CmsField } from "decap-cms-core";

export const multichain: CmsCollectionFile = {
  name: "multichain",
  label: "Multichain",
  description: "Multichain page",
  file: "lido-landing/multichain/multichain.md",
  fields: [
    {
      name: "info",
      label: "Info",
      widget: "info",
      required: false,
      data: [
        {
          description: "To add/update projects, follow the link below:",
          links: [
            ["add new project", "/admin/#/collections/multichain-projects"],
          ],
        },
      ],
    } as unknown as CmsField,
    {
      label: "Multichain page",
      name: "multichainPage",
      widget: "relation",
      collection: "multichain-projects",
      search_fields: ["name"],
      value_field: "id",
      display_fields: ["name"],
      multiple: true,
      options_length: 1000,
      required: false,
    } as unknown as CmsField,
  ],
};
