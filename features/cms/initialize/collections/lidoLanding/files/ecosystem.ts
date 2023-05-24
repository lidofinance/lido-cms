import type { CmsCollectionFile, CmsField } from "netlify-cms-core";

export const ecosystem: CmsCollectionFile = {
  name: "ecosystem",
  label: "Ecosystem",
  description: "Ecosystem page",
  file: "lido-landing/ecosystem.md",
  fields: [
    {
      name: "config",
      label: "Config",
      widget: "object",
      summary: "config for lido ecosystem page",
      collapsed: true,
      fields: [
        {
          name: "tokens",
          label: "Tokens",
          widget: "list",
          label_singular: "new token",
          fields: [
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
          fields: [
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
          fields: [
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
    },
    {
      name: "projects",
      label: "Projects",
      widget: "list",
      label_singular: "new",
      fields: [
        { label: "Logo", name: "logo", widget: "svg" } as unknown as CmsField,
        { label: "Name", name: "name", widget: "string" },
        { label: "Description", name: "description", widget: "string" },
        { label: "Link", name: "link", widget: "string" },
        { label: "Learn more link", name: "learnMoreLink", widget: "string" },
        {
          label: "Categories",
          name: "categories",
          widget: "relation",
          collection: "lido-landing",
          file: "ecosystem",
          searchFields: ["config.categories.*.label"],
          valueField: "config.categories.*.label",
          displayFields: ["config.categories.*.label"],
          multiple: true,
        } as unknown as CmsField,
        {
          label: "Networks",
          name: "networks",
          widget: "relation",
          collection: "lido-landing",
          file: "ecosystem",
          searchFields: ["config.networks.*.label"],
          valueField: "config.networks.*.label",
          displayFields: ["config.networks.*.label"],
          multiple: true,
        } as unknown as CmsField,
        {
          label: "Tokens",
          name: "tokens",
          widget: "relation",
          collection: "lido-landing",
          file: "ecosystem",
          searchFields: ["config.tokens.*.label"],
          valueField: "config.tokens.*.label",
          displayFields: ["config.tokens.*.label"],
          multiple: true,
        } as unknown as CmsField,
        {
          label: "Most popular",
          name: "mostPopular",
          widget: "boolean",
          default: false,
        },
        { label: "Ready", name: "ready", widget: "boolean", default: false },
      ],
    },
  ],
};
