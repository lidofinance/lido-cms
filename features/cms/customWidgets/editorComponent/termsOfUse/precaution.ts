import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

interface Row {
  ["scorecard-attribute"]?: string;
  ["categories"]?: string;
  ["self-assessment"]?: string;
  ["comments"]?: string;
}

export const registerTermsOfUsePrecaution = () =>
  registerCustomDirective("terms-precaution", {
    label: "Precaution text",
    fields: [
      {
        name: "precaution",
        label: "Precaution",
        widget: "markdown",
        buttons: [""],
        modes: ["rich_text"]
    },
    ],
    toPreview: ({ rows = [] }: { rows: Row[] }) => {
      let precautionString = "";
      
    

      return `
        <precaution>
          ${precautionString}
        </precaution>
      `;
    },
  });
