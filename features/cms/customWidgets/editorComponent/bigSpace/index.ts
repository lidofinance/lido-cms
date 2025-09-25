import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

export const registerBigSpace = () =>
  registerCustomDirective("big-space", {
    label: "Big space in text",
    fields: [],
    toPreview: function () {
      return `<div style="margin: 60px 0"></div>`;
    },
  });
