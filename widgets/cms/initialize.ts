import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const initializeCMS = () => {
  CMS.init({
    config: {
      backend: {
        name: "github",
        repo: publicRuntimeConfig.githubRepo,
        branch: publicRuntimeConfig.githubBranch,
        base_url: publicRuntimeConfig.baseUrl,
      },
      publish_mode: "editorial_workflow",
      show_preview_links: false,
      media_folder: "public/img",
      public_folder: "img",
      collections: [
        {
          name: "pages",
          label: "Pages",
          files: [
            {
              name: "scorecard",
              label: "Scorecard",
              description: "Scorecard page",
              file: "content/scorecard.md",
              fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Description", name: "description", widget: "text" },
                {
                  label: "Body",
                  name: "body",
                  widget: "markdown",
                  buttons: ["heading-two", "link"],
                  editor_components: ["table"],
                  modes: ["rich_text"],
                },
              ],
            },
          ],
        },
      ],
    },
  });
};
