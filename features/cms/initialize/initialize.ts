import getConfig from "next/config";

import {
  banners,
  ecosystemConfig,
  ecosystemProjects,
  emergencyBanner,
  ethereumStakingWidget,
  frontendTemplate,
  howLidoWorksTOC,
  lidoLanding,
  multichainProjects,
  opportunities,
  stethInDefiConfig,
  stethInDefiProject,
  teaserVideo,
  validatorsProjects,
} from "./collections";
import { howLidoWorks } from "./collections/howLidoWorks/howLidoWorks";

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
        howLidoWorks,
        howLidoWorksTOC,
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
  });

  CMS.registerEventListener({
    name: "preSave",
    handler: ({ entry }) => {
      // creating slug for HowLidoWorks articles
      if (entry.get("collection") !== "HowLidoWorks") return;
      if (entry.get("data").get("slug")) {
        return entry.get("data");
      }
      const slugifiedTitle = entry
        .get("data")
        .get("title")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");

      return entry.get("data").set("slug", slugifiedTitle);
    },
  });

  // ...existing event listeners...
};
