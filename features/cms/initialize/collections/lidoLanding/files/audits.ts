import type { CmsCollectionFile, CmsField } from "netlify-cms-core";

export const FILE_NAME = "audits";

export const audits: CmsCollectionFile = {
  name: FILE_NAME,
  label: "Audits",
  description: "Audits list",
  file: "lido-landing/audits.md",
  fields: [
    {
      widget: "list",
      name: "auditsList",
      label: "List of audits",
      summary: "{{fields.info}}",
      fields: [
        {
          widget: "svg",
          name: "logo",
          label: "Logo",
          options: { size: { width: 160, height: 34 } },
          hint: "The size of the image should be 160x34",
        } as unknown as CmsField,
        {
          widget: "svg",
          name: "networkLogo",
          label: "Network Logo",
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
          widget: "string",
          name: "info",
          label: "Info",
        },
        {
          widget: "string",
          name: "href",
          label: "Link",
        },
      ],
    },
  ],
};
