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
      ],
    },
  });
};
