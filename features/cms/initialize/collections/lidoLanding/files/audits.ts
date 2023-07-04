import type { CmsCollectionFile, CmsField } from "netlify-cms-core";

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
          widget: "string",
          name: "info",
          label: "Info",
        },
        {
          widget: "string",
          name: "href",
          label: "Link",
        },
        {
          widget: "svg",
          name: "logo",
          label: "Logo",
        } as unknown as CmsField,
        {
          widget: "string",
          name: "networkInfo",
          label: "Network Info",
        },
        {
          widget: "datetime",
          name: "dateInfo",
          label: "Date Info",
          format: "MMM YYYY",
        },
        {
          widget: "svg",
          name: "networkLogo",
          label: "Network Logo",
        } as unknown as CmsField,
      ],
    },
  ],
};
