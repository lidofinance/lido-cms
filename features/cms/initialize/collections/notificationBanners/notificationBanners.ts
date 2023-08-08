import type { CmsCollection, CmsField } from "netlify-cms-core";

export const notificationBanners: CmsCollection = {
  name: "notification-banners",
  label: "Notification banners",
  folder: "banners/list",
  create: true,
  slug: "{{fields.id}}",
  summary: `{{fields.text}}`,
  sortable_fields: [],
  fields: [
    {
      name: "id",
      widget: "uuid",
      hide: true,
    } as unknown as CmsField,

    { label: "Text", name: "text", widget: "string" },
    { label: "Link", name: "link", widget: "string" },
    {
      label: "Gradient",
      name: "gradient",
      widget: "object",
      fields: [
        {
          label: "Color start",
          name: "colorStart",
          widget: "color",
          required: false,
        },
        {
          label: "Color end",
          name: "colorEnd",
          widget: "color",
          required: false,
        },
      ],
    },
    {
      label: "Date",
      name: "date",
      widget: "object",
      fields: [
        {
          label: "Start date",
          name: "startDate",
          widget: "datetime",
          picker_utc: true,
          default: "",
          required: false,
        },
        {
          label: "End date",
          name: "endDate",
          widget: "datetime",
          picker_utc: true,
          default: "",
          required: false,
        },
      ],
    },
    {
      label: "Button",
      name: "button",
      widget: "object",
      fields: [
        { label: "Label", name: "label", widget: "string", required: false },
        {
          label: "Background",
          name: "background",
          widget: "color",
          enableAlpha: true,
          required: false,
        },
        {
          label: "Color",
          name: "color",
          widget: "color",
          enableAlpha: true,
          required: false,
        },
      ],
    },
    {
      label: "urls",
      name: "Urls",
      widget: "list",
      fields: [
        {
          label: "Url",
          name: "url",
          widget: "string",
        },
      ],
    },
  ],
};
