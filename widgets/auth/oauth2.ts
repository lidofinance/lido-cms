import * as simpleOauthModule from "simple-oauth2";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export const oauth2 = simpleOauthModule.create({
  client: {
    id: serverRuntimeConfig.oauthClientId,
    secret: serverRuntimeConfig.oauthClientSecret,
  },
  auth: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize",
  },
});
