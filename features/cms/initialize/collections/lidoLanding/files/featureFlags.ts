import type { CmsCollectionFile, CmsField } from "netlify-cms-core";

export const featureFlags: CmsCollectionFile = {
  name: "feature-flags",
  label: "Feature Flags",
  file: "lido-landing/feature-flags.md",
  fields: [
    {
      label: "Feature Flags",
      name: "flags",
      widget: "list",
      summary: "{{fields.name}}",
      fields: [
        {
          label: "Flag Key",
          name: "name",
          widget: "string",
          hint: "Technical key for the feature flag (e.g., 'new-feature')",
        },
        {
          label: "Description",
          name: "description",
          widget: "text",
          required: false,
          hint: "Optional description of what this feature flag controls",
        },
        {
          label: "Testnet Environment",
          name: "testnetEnabled",
          widget: "boolean",
          default: false,
          hint: "Enable this feature flag in testnet environment",
        },
        {
          label: "Production Environment",
          name: "productionEnabled",
          widget: "boolean",
          default: false,
          hint: "Enable this feature flag in production environment",
        },
      ],
    },
  ],
};
