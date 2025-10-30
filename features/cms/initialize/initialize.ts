import getConfig from "next/config";

import {
  lidoLanding,
  ecosystemProjects,
  ecosystemConfig,
  validatorsProjects,
  frontendTemplate,
  ethereumStakingWidget,
  banners,
  emergencyBanner,
  stethInDefiProject,
  stethInDefiConfig,
  multichainProjects,
  teaserVideo,
  opportunities,
  howLidoWorksArticle,
  howLidoWorksAll,
} from "./collections";

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
      local_backend: true,
      publish_mode: "editorial_workflow",
      show_preview_links: false,
      media_folder: "public/img",
      public_folder: "img",
      collections: [
        lidoLanding,
        howLidoWorksArticle,
        howLidoWorksAll,
        ecosystemProjects,
        ecosystemConfig,
        validatorsProjects,
        frontendTemplate,
        ethereumStakingWidget,
        banners,
        stethInDefiProject,
        stethInDefiConfig,
        multichainProjects,
        teaserVideo,
        emergencyBanner,
        opportunities,
      ],
    },
  });

  // Register custom markdown renderer
  CMS.registerPreviewStyle("img {max-width: 400px; max-height: 400px}", {
    raw: true,
  }); // Register custom markdown renderer
  CMS.registerPreviewStyle(
    "blockquote {padding: 10px; background: lightgrey}",
    {
      raw: true,
    },
  );

  // ...existing event listeners...
};
