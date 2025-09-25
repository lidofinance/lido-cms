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
        collection: "HowLidoWorksArticle",
        search_fields: ["title"],
        value_field: "id",
        display_fields: ["title"],
      },
    ],
    fromBlock: function (match) {
      return {
        linkText: match[1],
        article: match[2],
      };
    },
    toBlock: function (data) {
      return `[${data.linkText}](${data.article})`;
    },
    toPreview: function (data) {
      return `<a href="${data.article}">${data.linkText}</a>`;
    },
  });
