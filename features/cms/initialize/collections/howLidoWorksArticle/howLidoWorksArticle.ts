import type { CmsCollection, CmsField } from "decap-cms-core";

export const howLidoWorksArticle: CmsCollection = {
  name: "HowLidoWorksArticle",
  label: "How Lido works (Articles)",
  folder: "lido-landing/how-lido-works/articles",
  media_folder: "./img",
  public_folder: "./img",
  create: true,
  identifier_field: "title",
  summary: `{{fields.title}}`,
  slug: "{{fields.id}}",
  fields: [
    {
      name: "id",
      label: "identifier",
      widget: "uuid",
      hide: true,
    } as unknown as CmsField,
    { label: "Title", name: "title", widget: "string" },
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      editor_components: [
        "article-link",
        "big-space",
        "staking-info",
        "image",
        "rewards-calculator",
        "info-block",
        "fee-table",
        "button",
      ],
    },
  ],
};
