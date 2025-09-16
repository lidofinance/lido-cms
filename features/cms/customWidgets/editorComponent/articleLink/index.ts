import { registerCustomDirective } from "features/cms/utils/customDirectiveUtils";

export const registerArticleLink = () =>
  registerCustomDirective("article-link", {
    label: "Article link",
    fields: [
      {
        name: "linkText",
        label: "Link text",
        widget: "string",
      },
      {
        name: "article",
        label: "Article",
        widget: "relation",
        collection: "HowLidoWorks",
        search_fields: ["name"],
        value_field: "slug",
        display_fields: ["name"],
      },
    ],
    fromBlock: function (match) {
      return {
        linkText: match[1],
        article: match[2],
      };
    },
    toBlock: function (data) {
      return `[${data.linkText}](${data.article}/)`;
    },
    toPreview: function (data) {
      return `<a href="${data.article}/">${data.linkText}</a>`;
    },
  });
