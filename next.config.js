/** @type {import('next').NextConfig} */

const rawOrigin = process.env.ORIGIN;
if (rawOrigin == null || rawOrigin == "") {
  console.error("You need to specify ORIGIN environment variable");
  process.exit();
}
const origins = rawOrigin.split(",").map((origin) => new URL(origin).host);

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    origins,
    redirectUri: process.env.REDIRECT_URL,
    loginAuthTarget: process.env.AUTH_TARGET || "_self",
    oauthProvider: process.env.OAUTH_PROVIDER || "github",
    scopes: process.env.SCOPES || "repo",
    // Supply GIT_HOSTNAME for enterprise github installs.
    tokenHost: process.env.GIT_HOSTNAME || "https://github.com",
    tokenPath: process.env.OAUTH_TOKEN_PATH || "/login/oauth/access_token",
    authorizePath: process.env.OAUTH_AUTHORIZE_PATH || "/login/oauth/authorize",
  },
  serverRuntimeConfig: {
    oauthClientId: process.env.OAUTH_CLIENT_ID,
    oauthClientSecret: process.env.OAUTH_CLIENT_SECRET,
  },
};

module.exports = nextConfig;
