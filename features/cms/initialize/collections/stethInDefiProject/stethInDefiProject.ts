import type { CmsCollection, CmsField } from "netlify-cms-core";

export const categoryList = [
  { label: "Lending and Borrowing", value: "1" },
  { label: "Leveraged staking", value: "2" },
  { label: "Diversified Rewards ", value: "3" },
  { label: "Restaking", value: "4" },
];

export const stethInDefiProject: CmsCollection = {
  name: "steth-in-defi-project",
  label: "stETH in DEFI (Projects)",
  folder: "lido-landing/steth-in-defi/projects",
  create: true,
  slug: "{{fields.id}}",
  summary: `{{fields.name}}`,
  sortable_fields: [],
  view_filters: [
    { label: "Published", field: "ready", pattern: "true" },
    { label: "Not published", field: "ready", pattern: "false" },
  ],
  fields: [
    {
      name: "id",
      widget: "uuid",
      hide: true,
    } as unknown as CmsField,
    {
      name: "info",
      label: "Info",
      widget: "info",
      required: false,
      data: [
        {
          description:
            "To add/update/delete curators/Depositable tokens/additional rewards, follow the link below:",
          links: [
            [
              "Go to project config",
              "/#/collections/steth-in-defi-config/entries/project-steth-in-defi-config",
            ],
          ],
        },
      ],
    } as unknown as CmsField,
    { label: "Name", name: "name", widget: "string" },
    {
      name: "categoryId",
      label: "Category",
      widget: "select",
      options: categoryList,
    },
    {
      label: "Curator",
      name: "curatorId",
      widget: "relation",
      collection: "steth-in-defi-config",
      file: "project-steth-in-defi-config",
      searchFields: ["curators.*.label"],
      valueField: "curators.*.id",
      displayFields: ["curators.*.label"],
    } as unknown as CmsField,
    { label: "Protocol", name: "protocol", widget: "string", required: false },
    {
      label: "Depositable token",
      name: "depositableTokenId",
      widget: "relation",
      collection: "steth-in-defi-config",
      file: "project-steth-in-defi-config",
      searchFields: ["depositableTokens.*.label"],
      valueField: "depositableTokens.*.id",
      displayFields: ["depositableTokens.*.label"],
    } as unknown as CmsField,
    {
      label: "Network",
      name: "networkId",
      widget: "relation",
      collection: "steth-in-defi-config",
      file: "project-steth-in-defi-config",
      searchFields: ["networks.*.label"],
      valueField: "networks.*.id",
      displayFields: ["networks.*.label"],
    } as unknown as CmsField,
    { label: "TVL Key", name: "tvlId", widget: "string", required: false },
    {
      label: "Additional Rewards",
      name: "additionalRewardsId",
      widget: "relation",
      collection: "steth-in-defi-config",
      file: "project-steth-in-defi-config",
      searchFields: ["additionalRewards.*.label"],
      valueField: "additionalRewards.*.id",
      displayFields: ["additionalRewards.*.label"],
      multiple: true,
    } as unknown as CmsField,
    {
      label: "Additional Rewards Label",
      name: "additionalRewardsLabel",
      widget: "string",
      required: false,
    },
    { label: "Link", name: "link", widget: "string" },
    {
      label: "Feature Mode",
      name: "featureMode",
      widget: "object",
      collapsed: true,
      fields: [
        {
          label: "Mode Activation",
          name: "active",
          widget: "boolean",
          default: false,
        },
        {
          label: "Image",
          name: "image",
          widget: "svg",
          hint: "The size of the image should be 100x100",
          options: {
            size: {
              width: 100,
              height: 100,
            },
          },
          required: false,
        } as unknown as CmsField,
        {
          label: "Priority",
          name: "priority",
          widget: "number",
          value_type: "int",
          min: 0,
          default: 0,
          hint: "Bigger number means higher priority",
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
          name: "active",
          widget: "boolean",
          default: false,
        },
        { label: "Title", name: "title", widget: "string", required: false },
        {
          label: "Link label",
          name: "linkLabel",
          widget: "string",
          required: false,
        },
        { label: "Link", name: "link", widget: "string", required: false },
      ],
    },
    { label: "Publish", name: "ready", widget: "boolean", default: false },
  ],
};
