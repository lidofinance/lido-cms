import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

export const registerButton = () =>
  registerCustomDirective("button", {
    label: "Button",
    fields: [
      {
        name: "text",
        label: "Button Text",
        widget: "string",
      },
      {
        name: "link",
        label: "Link URL",
        widget: "string",
        hint: "Enter the full URL or relative path",
      },
    ],
    toPreview: function (data) {
      return `<button href="${data.link}" style="display: inline-block; padding: 12px 24px; background-color: #00A3FF; color: white; text-decoration: none; border-radius: 8px; font-weight: 500; border: none; cursor: pointer;">${data.text}</button>`;
    },
  });
