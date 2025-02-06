import type { CmsCollection, CmsField } from "netlify-cms-core";

export const teaserVideo: CmsCollection = {
  name: "teaser-video",
  label: "Teaser Video",
  editor: {
    preview: false,
  },
  files: [
    {
      name: "teaser-video-config",
      label: "Teaser Video Configuration",
      description:
        "Configuration for video iframe settings used in different environments",
      file: "lido-landing/teaser-video.md",
      fields: [
        {
          name: "info",
          label: "Information",
          widget: "info",
          required: false,
          data: [
            {
              description:
                "This configuration allows you to manage video settings and backup link behavior for testnet and production environments.",
            },
          ],
        } as unknown as CmsField,
        {
          name: "testnet-useIframeVideo",
          label: "Enable Video (Testnet)",
          widget: "boolean",
          default: false,
          required: false,
          hint: "Toggle to enable/disable iframe video in testnet environment",
        },
        {
          name: "testnet-iframeVideoCode",
          label: "Video Embed Code (Testnet)",
          widget: "text",
          required: false,
          hint: "Paste the iframe HTML code from YouTube or other video platforms. Used when video is enabled.",
        },
        {
          name: "testnet-useBackupLink",
          label: "Use Backup Link Instead of Video (Testnet)",
          widget: "boolean",
          default: false,
          required: false,
          hint: "When enabled, clicking the button will open the backup link in a new tab instead of showing the video",
        },
        {
          name: "testnet-backupLink",
          label: "Backup Link (Testnet)",
          widget: "string",
          required: false,
          hint: "URL to open in new tab when backup link mode is enabled",
        },
        {
          name: "production-useIframeVideo",
          label: "Enable Video (Production)",
          widget: "boolean",
          default: false,
          required: false,
          hint: "Toggle to enable/disable iframe video in production environment",
        },
        {
          name: "production-iframeVideoCode",
          label: "Video Embed Code (Production)",
          widget: "text",
          required: false,
          hint: "Paste the iframe HTML code from YouTube or other video platforms. Used when video is enabled.",
        },
        {
          name: "production-useBackupLink",
          label: "Use Backup Link Instead of Video (Production)",
          widget: "boolean",
          default: false,
          required: false,
          hint: "When enabled, clicking the button will open the backup link in a new tab instead of showing the video",
        },
        {
          name: "production-backupLink",
          label: "Backup Link (Production)",
          widget: "string",
          required: false,
          hint: "URL to open in new tab when backup link mode is enabled",
        },
        {
          name: "body",
          label: "Documentation",
          widget: "markdown",
          required: false,
          hint: "Additional documentation and usage instructions",
        },
      ],
    },
  ],
};
