import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { FILE_NAME } from "features/cms/initialize/collections/ecosystemConfig/files/project";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Bold, Text, Card, Logo } from "./projectConfigEcosystemStyles";

type Data = {
  tokens: {
    id: string;
    logo: string;
    label: string;
  }[];
  categories: {
    id: string;
    label: string;
  }[];
  networks: {
    id: string;
    logo: string;
    label: string;
  }[];
};

export const ProjectConfigEcosystemPreview = ({
  entry,
}: PreviewTemplateComponentProps) => {
  const { tokens, categories, networks }: Data = entry.getIn(["data"]).toJS();

  console.log(tokens, categories, networks);
  return (
    <>
      <Bold>Tokens:</Bold>
      {tokens.map((token) => (
        <Card key={token.id}>
          <Logo src={token.logo} />
          <Text>{token.label}</Text>
        </Card>
      ))}
      <Bold>Categories:</Bold>
      <Text>{categories.map((category) => category.label).join(", ")}</Text>
      <Bold>Networks:</Bold>
      {networks.map((network) => (
        <Card key={network.id}>
          <Logo src={network.logo} />
          <Text>{network.label}</Text>
        </Card>
      ))}
    </>
  );
};

export const registerProjectConfigEcosystemPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    FILE_NAME,
    withStyledComponentsRendered(ProjectConfigEcosystemPreview)
  );
};
