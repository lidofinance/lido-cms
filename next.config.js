/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    githubRepo:
      process.env.GITHUB_REPO && process.env.GITHUB_REPO.includes("/")
        ? process.env.GITHUB_REPO
        : "lidofinance/lido-content",
    githubBranch: process.env.GITHUB_BRANCH ?? "main",
  },
  serverRuntimeConfig: {
    rateLimit: process.env.RATE_LIMIT,
    rateLimitTimeFrame: process.env.RATE_LIMIT_TIME_FRAME,
    oauthClientId: process.env.OAUTH_CLIENT_ID,
    oauthClientSecret: process.env.OAUTH_CLIENT_SECRET,
  },
};

module.exports = nextConfig;
