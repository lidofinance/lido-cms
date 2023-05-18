import type { CmsCollectionFile } from "netlify-cms-core";

export const ecosystem: CmsCollectionFile = {
  name: "ecosystem",
  label: "Ecosystem",
  description: "Ecosystem page",
  file: "lido-landing/ecosystem.md",
  fields: [
    {
      name: "projects",
      label: "Projects",
      widget: "list",
      label_singular: "new",
      fields: [
        { label: "Name", name: "name", widget: "string" },
        { label: "Link", name: "link", widget: "string" },
        { label: "Logo", name: "logo", widget: "image" },
        {
          label: "Categories",
          name: "categories",
          widget: "select",
          options: ["Get", "Earn", "Hold", "Analyze", "Cover"],
          multiple: true,
        },
        { label: "Description", name: "description", widget: "string" },
        {
          label: "Networks",
          name: "networks",
          widget: "select",
          options: ["ethereum", "solana", "polygon", "arbitrum", "optimism"],
          multiple: true,
        },
        {
          label: "Most popular",
          name: "mostPopular",
          widget: "boolean",
          default: false,
        },
        {
          label: "Tokens",
          name: "tokens",
          widget: "select",
          options: ["stETH", "wstETH", "stSOL", "stMATIC", "LDO"],
          multiple: true,
        },
        { label: "Learn more link", name: "learnMoreLink", widget: "string" },
        { label: "Ready", name: "ready", widget: "boolean", default: false },
      ],
    },
  ],
};
