import { GetStaticProps } from "next";
import { FC } from "react";

const Index: FC = () => {
  return <>Redirecting...</>;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: "/admin",
    },
  };
};
