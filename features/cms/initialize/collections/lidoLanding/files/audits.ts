import type { CmsCollectionFile } from "netlify-cms-core";

export const audits: CmsCollectionFile = {
  name: "audits",
  label: "Audits",
  description: "Audits list",
  file: "lido-landing/audits.md",
  fields: [
    {
      widget: "list",
      name: "auditsList",
      label: "List of audits",
      fields: [
        {
          widget: "text",
          name: "info",
          label: "Info",
        },
        {
          widget: "text",
          name: "href",
          label: "Href",
        },
        {
          widget: "text",
          name: "logo",
          label: "Logo",
        },
        {
          widget: "number",
          name: "logoHeight",
          label: "Logo Height",
          default: 16,
        },
        {
          widget: "text",
          name: "networkInfo",
          label: "Network Info",
        },
        {
          widget: "text",
          name: "dateInfo",
          label: "Date Info",
        },
        {
          widget: "text",
          name: "networkLogo",
          label: "Network Logo",
        },
      ],
    },
  ],
};
