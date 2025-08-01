import type { CmsCollectionFile, CmsField } from "decap-cms-core";

export const validators: CmsCollectionFile = {
  name: "validators",
  label: "Validators",
  description: "Validators info",
  file: "lido-landing/validators/validators.md",
  fields: [
    {
      name: "pages",
      label: "Pages",
      widget: "object",
      summary: "list pages",
      collapsed: true,
      fields: [
        {
          label: "Main page",
          name: "main",
          widget: "relation",
          collection: "validators-projects",
          search_fields: ["name"],
          value_field: "id",
          display_fields: ["name"],
          multiple: true,
          options_length: 1000,
          required: false,
        } as unknown as CmsField,
        {
          label: "Ethereum page",
          name: "ethereum",
          widget: "relation",
          collection: "validators-projects",
          search_fields: ["name"],
          value_field: "id",
          display_fields: ["name"],
          multiple: true,
          options_length: 1000,
          required: false,
        } as unknown as CmsField,
        {
          label: "Polygon page",
          name: "polygon",
          widget: "relation",
          collection: "validators-projects",
          search_fields: ["name"],
          value_field: "id",
          display_fields: ["name"],
          multiple: true,
          options_length: 1000,
          required: false,
        } as unknown as CmsField,
        {
          label: "Solana",
          name: "solana",
          widget: "relation",
          collection: "validators-projects",
          search_fields: ["name"],
          value_field: "id",
          display_fields: ["name"],
          multiple: true,
          options_length: 1000,
          required: false,
        } as unknown as CmsField,
      ],
    },
  ],
};
