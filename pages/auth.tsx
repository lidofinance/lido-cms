import { oauth2 } from "widgets/auth";
import { nanoid } from "nanoid";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function Auth() {
  return <>Redirecting...</>;
}

export const getServerSideProps = () => {
  const authorizationUri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: publicRuntimeConfig.baseUrl + "/callback",
    state: nanoid(32),
  });
  return {
    redirect: {
      destination: authorizationUri,
    },
  };
};
