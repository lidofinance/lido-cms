import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { FILE_NAME } from "features/cms/initialize/collections/lidoLanding/files/validators";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Bold, Text } from "./validatorsStyles";

type Pages = Record<string, string[]>;

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
  const pages: Pages = entry.getIn(["data", "pages"]).toJS();
  const { pages: projectsData }: ProjectsData = fieldsMetaData.toJS();

  return (
    <>
      {[...Object.entries(pages)].map(([pageName, projects]) => (
        <>
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
        </>
      ))}
    </>
  );
};

export const registerValidatorsPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    FILE_NAME,
    withStyledComponentsRendered(ValidatorsPreview)
  );
};
