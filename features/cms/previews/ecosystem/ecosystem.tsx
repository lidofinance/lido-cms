import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { FILE_NAME } from "features/cms/initialize/collections/lidoLanding/files/ecosystem";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Bold, Text, Line } from "./ecosystemStyles";

type Data = {
  mostPopular: string[];
  pages: Record<string, string[]>;
};

type ProjectsData = {
  mostPopular: {
    "ecosystem-projects": Record<
      string,
      {
        name: string;
      }
    >;
  };
  pages?: Record<
    string,
    {
      "ecosystem-projects": Record<
        string,
        {
          name: string;
        }
      >;
    }
  >;
};

export const EcosystemPreview = ({
  entry,
  fieldsMetaData,
}: PreviewTemplateComponentProps) => {
  const { pages, mostPopular }: Data = entry.getIn(["data"]).toJS();
  const {
    pages: pagesProjectsData,
    mostPopular: mostPopularProjectsData,
  }: ProjectsData = fieldsMetaData.toJS();

  return (
    <>
      <Bold>Most Popular:</Bold>
      <Text>
        {mostPopularProjectsData
          ? mostPopular
              .map(
                (id) => mostPopularProjectsData["ecosystem-projects"][id].name
              )
              .join(", ")
          : "...loading"}
      </Text>
      <Line />
      {[...Object.entries(pages)].map(([pageName, projects]) => (
        <>
          <Bold>{pageName}:</Bold>
          <Text>
            {pagesProjectsData?.[pageName]
              ? projects
                  .map(
                    (id) =>
                      pagesProjectsData[pageName]?.["ecosystem-projects"][id]
                        .name
                  )
                  .join(", ")
              : "...loading"}
          </Text>
        </>
      ))}
    </>
  );
};

export const registerEcosystemPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    FILE_NAME,
    withStyledComponentsRendered(EcosystemPreview)
  );
};
