import { useEffect, FC } from "react";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import { oauth2 } from "shared/authentication/api/oauth2";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

interface CallbackProps {
  message: string;
  content: string;
}

const Callback: FC<CallbackProps> = ({ message, content }) => {
  useEffect(() => {
    const oauthProvider = publicRuntimeConfig.oauthProvider;
    const origins = publicRuntimeConfig.origins;
    function recieveMessage(e: MessageEvent) {
      console.log("recieveMessage %o", e);
      const origin = new URL(e.origin).host;
      if (!origins.includes(origin)) {
        console.log("Invalid origin: %s", e.origin);
        return;
      }
      // send message to main window with da app
      window.opener?.postMessage(
        `authorization:${oauthProvider}:${message}:${JSON.stringify(content)}`,
        e.origin
      );
    }
    window.addEventListener("message", recieveMessage, false);
    // Start handshare with parent
    console.log("Sending message: %o", oauthProvider);
    window.opener?.postMessage(`authorizing:${oauthProvider}`, "*");
  }, [message, content]);

  return <>Loading...</>;
};

export default Callback;

const getOptions = (code: string) => {
  let options: Record<string, string> = {
    code,
  };

  if (publicRuntimeConfig.oauthProvider === "gitlab") {
    options.client_id = serverRuntimeConfig.oauthClientId;
    options.client_secret = serverRuntimeConfig.oauthClientServer;
    options.grant_type = "authorization_code";
    options.redirect_uri = publicRuntimeConfig.redirectUri;
  }

  return options;
};

const getAccessToken = (options: Record<string, string>) =>
  new Promise<{ message: string; content: any }>((resolve) => {
    oauth2.authorizationCode.getToken(options, (error: Error, result: any) => {
      if (error) {
        console.error("Access Token Error", error);
        resolve({
          message: "error",
          content: JSON.stringify(error.message),
        });
      } else {
        const token = oauth2.accessToken.create(result);
        console.log(token);
        resolve({
          message: "success",
          content: {
            token: token.token.access_token,
            provider: publicRuntimeConfig.oauthProvider,
          },
        });
      }
    });
  });

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.code == null || Array.isArray(context.query.code)) {
    throw new Error("code wasn't specified");
  }
  const options = await getOptions(context.query.code);
  const { message, content } = await getAccessToken(options);
  return {
    props: {
      message,
      content,
    },
  };
};
