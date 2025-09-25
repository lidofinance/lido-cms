import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

export const registerStakingInfo = () =>
  registerCustomDirective("staking-info", {
    label: "Staking info",
    fields: [
      {
        name: "amount",
        label: "Amount of ETH",
        widget: "string",
        default: "32 ETH",
      },
      {
        name: "action",
        label: "Action",
        widget: "string",

        default: "To run your node",
      },
      {
        name: "expertise",
        label: "Expertise",
        widget: "string",
        default: "High level",
      },
    ],
    toPreview: function (data) {
      return `<div style="display: flex; flex-direction: row; gap: 10px; background: aliceblue; padding: 15px;">
<div style="display: flex; flex-direction: column" ><div>${data.amount}</div><div>${data.action}</div></div>
<div style="display: flex; flex-direction: column" ><div>Technical expertise</div><div>${data.expertise}</div></div>
</div>`;
    },
  });
