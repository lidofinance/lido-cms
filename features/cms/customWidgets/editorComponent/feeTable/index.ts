import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

export const registerFeeTable = () =>
  registerCustomDirective("fee-table", {
    label: "Fees table",
    fields: [],
    toPreview: function () {
      return `<div style="margin: 60px 0; background: lightgrey; padding: 20px 50px; border: 1px solid black; max-width: 400px;">Table with Lido fees</div>`;
    },
  });
