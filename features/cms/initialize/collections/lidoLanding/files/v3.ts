import type { CmsCollectionFile } from "decap-cms-core";

export const variantsList = [
  { label: "Success", value: "success" },
  { label: "Warning", value: "warning" },
  { label: "Error ", value: "error" },
];

export const v3: CmsCollectionFile = {
  name: "v3",
  label: "V3",
  description: "v3",
  file: "lido-landing/v3.md",
  fields: [
    {
      label: "Status",
      name: "status",
      widget: "object",
      fields: [
        {
          label: "Variant",
          name: "variant",
          widget: "select",
          options: variantsList,
        },
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
      ],
    },
    {
      label: "Links",
      name: "links",
      widget: "object",
      fields: [
        {
          label: "User and Integration Guides",
          name: "userAndIntegrationGuides",
          widget: "string",
        },
        {
          label: "Testnet Deployments Info",
          name: "testnetDeploymentsInfo",
          widget: "string",
        },
        {
          label: "Technical Design Documentation",
          name: "technicalDesignDocumentation",
          widget: "string",
        },
        {
          label: "Lido V3 Whitepaper",
          name: "lidoV3Whitepaper",
          widget: "string",
        },
        {
          label: "Risk Assessment Framework",
          name: "riskAssessmentFramework",
          widget: "string",
        },
        {
          label: "Fee Structure",
          name: "feeStructure",
          widget: "string",
        },
        {
          label: "Audits",
          name: "audits",
          widget: "string",
        },
      ],
    },
  ],
};
