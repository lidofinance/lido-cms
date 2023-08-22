import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { validators } from "features/cms/initialize/collections/lidoLanding/files/validators";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Row, Bold, Text } from "./validatorsStyles";

type Data = {
  pages?: Record<string, string[]>
};

type ProjectsData = {
  pages?: Record<
    string,
    {
      "validators-projects": Record<
        string,
        {
          name: string;
        }
      >;
    }
  >;
};

export const ValidatorsPreview = ({
  entry,
  fieldsMetaData,
}: PreviewTemplateComponentProps) => {
  const { pages = {} }: Data = entry.getIn(["data"]).toJS();
  const { pages: projectsData }: ProjectsData = fieldsMetaData.toJS();

  return (
    <>
      {[...Object.entries(pages)].map(([pageName, projects]) => (
        <Row key={pageName}>
          <Bold>{pageName}:</Bold>
          <Text>
            {projectsData?.[pageName]
              ? projects
                  .map(
                    (id) =>
                      projectsData[pageName]?.["validators-projects"][id].name
                  )
                  .join(", ")
              : "...loading"}
          </Text>
        </Row>
      ))}
    </>
  );
};

export const registerValidatorsPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    validators.name,
    withStyledComponentsRendered(ValidatorsPreview)
  );
};
