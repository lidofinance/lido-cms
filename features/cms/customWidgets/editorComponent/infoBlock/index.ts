import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

export const registerInfoBlock = () =>
  registerCustomDirective("info-block", {
    label: "Info block",
    fields: [
      {
        name: "imgSource",
        label: "Image",
        widget: "image",
      },
      {
        name: "description",
        label: "Description",
        widget: "string",
        default: "To run your node",
      },
      {
        name: "title",
        label: "Title",
        widget: "string",
        default: "High level",
      },
    ],
    toBlock: function (data) {
      return `
:::info-block
   imgSource: "${data.imgSource}"
   img: "![](${data.imgSource})"
   title: "${data.title}"
   description: "${data.description}"
:::`;
    },
    toPreview: function (data) {
      return `
<div style="display: flex; flex-direction: row; gap: 10px; background: aliceblue; padding: 20px;">
  <div style="width: 50px; height: 50px; background: darkgray">image</div>
  <div style="display: flex; flex-direction: column; ">
  <div>${data.title}</div>
  <div>${data.description}</div>
  </div>
</div>`;
    },
  });
