import type { CmsCollectionFile } from "decap-cms-core";

export const nodeOperators: CmsCollectionFile = {
  name: "node-operators",
  label: "Node Operators",
  description: "Node Operators",
  file: "lido-landing/node-operators.md",
  fields: [
    {
      name: "curatedNodeOperatorsCount",
      label: "Curated Node Operators Count",
      widget: "number",
      value_type: "int",
      min: 0,
    },
    {
      name: "simpleDvtNodeOperatorsCount",
      label: "Simple DVT Node Operators Count",
      widget: "number",
      value_type: "int",
      min: 0,
    },
    {
      name: "simpleDvtNodeOperatorsDescription",
      label: "Simple DVT Node Operators Description",
      widget: "string",
    },
  ],
};
