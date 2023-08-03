import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { validatorsProjects } from "features/cms/initialize/collections/validatorsProjects/validatorsProjects";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Text, Card, Logo } from "./projectValidatorsStyles";

type Project = {
  logo: string;
  name: string;
  link: string;
};

export const ProjectValidatorsPreview = ({
  entry,
}: PreviewTemplateComponentProps) => {
  const { logo, name, link }: Project = entry.getIn(["data"]).toJS();

  return (
    <>
      <Card href={link}>
        <Logo src={logo} />
        <Text>{name}</Text>
      </Card>
    </>
  );
};

export const registerProjectValidatorsPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    validatorsProjects.name,
    withStyledComponentsRendered(ProjectValidatorsPreview)
  );
};
