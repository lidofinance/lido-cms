import type { CmsCollectionFile, CmsField } from "decap-cms-core";

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
          widget: "readonly-after-creation",
          hint: "⚠️ Important: Technical flag name (e.g., 'new-feature'). CANNOT BE CHANGED after creation! Used in code.",
          pattern: [
            "^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$",
            "Only lowercase letters, numbers and hyphens. Must start and end with a letter or number",
          ],
          required: true,
        } as CmsField,
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
