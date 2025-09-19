import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

export const registerRewardsCalculator = () =>
  registerCustomDirective("rewards-calculator", {
    label: "Rewards calculator",
    fields: [],
    toPreview: function () {
      return `<div style="padding: 20px; margin: 10px 0; background: grey">Rewards calculator component</div>`;
    },
  });
