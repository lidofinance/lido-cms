import type { CmsCollectionFile, CmsField } from "decap-cms-core";

export const emergencyBannerPage: CmsCollectionFile = {
  name: "emergencyBanner",
  label: "Emergency Banner",
  label_singular: "Emergency Banner",
  file: "lido-landing/emergencyBanner.md",
  fields: [
    {
      label: "Is shown",
      name: "isShown",
      widget: "boolean",
      default: false,
    },
    {
      name: "id",
      label: "identifier",
      widget: "uuid",
    } as unknown as CmsField,
    { label: "Title", name: "title", widget: "string" },
    { label: "Description", name: "description", widget: "string" },
    { label: "Link", name: "link", widget: "string" },
    { label: "Link Text", name: "linkText", widget: "string" },
  ],
};
