/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    githubRepo: process.env.GITHUB_REPO || "lidofinance/cms",
    githubBranch: process.env.GITHUB_BRANCH || "main",
  },
  serverRuntimeConfig: {
    oauthClientId: process.env.OAUTH_CLIENT_ID,
    oauthClientSecret: process.env.OAUTH_CLIENT_SECRET,
  },
};

module.exports = nextConfig;
