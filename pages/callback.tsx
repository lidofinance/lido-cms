import { useEffect, FC } from "react";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import { oauth2 } from "widgets/auth";

const { publicRuntimeConfig } = getConfig();

interface CallbackProps {
  message: string;
  content: string;
}

const Callback: FC<CallbackProps> = ({ message, content }) => {
  useEffect(() => {
    const oauthProvider = "github";
    function recieveMessage(e: MessageEvent) {
      console.log("recieveMessage %o", e);
      const originHost = new URL(e.origin).host;
      const baseUrlHost = new URL(publicRuntimeConfig.baseUrl).host;
      if (originHost !== baseUrlHost) {
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
        resolve({
          message: "success",
          content: {
            token: token.token.access_token,
            provider: "github",
          },
        });
      }
    });
  });

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.code == null || Array.isArray(context.query.code)) {
    throw new Error("code wasn't specified");
  }
  const { message, content } = await getAccessToken({
    code: context.query.code,
  });
  return {
    props: {
      message,
      content,
    },
  };
};
