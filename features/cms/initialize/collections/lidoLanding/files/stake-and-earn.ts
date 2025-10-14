import type { CmsCollectionFile, CmsField } from "decap-cms-core";

export const ggvApyTypeOptions = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Weekly Moving Average", value: "weeklyMovingAverage" },
];
export const defaultApyType = "weekly";

export const stakeAndEarn: CmsCollectionFile = {
  name: "stake-and-earn",
  label: "Stake and Earn",
  file: "lido-landing/stake-and-earn.md",
  fields: [
    {
      label: "Products",
      name: "products",
      widget: "list",
      summary: "{{fields.name}}",
      max: 3,
      fields: [
        {
          label: "Logo",
          name: "logo",
          widget: "svg",
        } as unknown as CmsField,
        {
          widget: "svg",
          name: "darkLogo",
          label: "Logo for dark theme",
          required: false,
        } as unknown as CmsField,
        {
          label: "Name",
          name: "name",
          widget: "string",
        },
        {
          label: "Description",
          name: "description",
          widget: "string",
        },
        {
          label: "Description (for Header)",
          name: "headerDescription",
          widget: "string",
        },
        {
          label: "Data Key",
          name: "dataId",
          widget: "string",
          required: false,
        },
        {
          label: "Reward Label",
          name: "rewardLabel",
          widget: "string",
          required: false,
        },
        {
          label: "Button Label",
          name: "buttonLabel",
          widget: "string",
          required: false,
        },
        {
          label: "Button Link",
          name: "depositLink",
          widget: "string",
        },
        {
          label: "Is button disabled",
          name: "isButtonDisabled",
          widget: "boolean",
          default: false,
          required: false,
        },
        {
          label: "'NEW' label",
          name: "isNew",
          widget: "boolean",
          default: true,
        },
        {
          label: "GGV APY Type",
          name: "ggvApyType",
          widget: "select",
          options: ggvApyTypeOptions,
          default: defaultApyType,
          required: false,
        },
        {
          label: "Tooltip",
          name: "tooltip",
          widget: "object",
          collapsed: true,
          fields: [
            {
              label: "Label",
              name: "label",
              widget: "string",
              required: false,
            },
            {
              label: "Text",
              name: "text",
              widget: "string",
              hint: "If this field is empty, the tooltip will not be displayed",
              required: false,
            },
          ],
        },
        {
          label: "Urgent Mode",
          name: "urgentMode",
          widget: "object",
          collapsed: true,
          fields: [
            {
              label: "Mode Activation",
              name: "isActive",
              widget: "boolean",
              default: false,
              required: false,
            },
            {
              label: "Title",
              name: "title",
              widget: "string",
              required: false,
            },
            {
              label: "Link label",
              name: "linkLabel",
              widget: "string",
              required: false,
            },
            { label: "Link", name: "link", widget: "string", required: false },
          ],
        },
      ],
    },
  ],
};
