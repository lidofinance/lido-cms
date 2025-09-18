import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

export const registerRewardsCalculator = () =>
  registerCustomDirective("rewards-calculator", {
    label: "Rewards calculator",
    fields: [],
    toPreview: function () {
      return `<div style="padding: 10px; background: grey">Rewards calculator component</div>`;
    },
  });
