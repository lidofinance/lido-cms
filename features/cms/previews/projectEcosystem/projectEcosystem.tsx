import { PreviewTemplateComponentProps } from "decap-cms-core";

import { ecosystemProjects } from "features/cms/initialize/collections/ecosystemProject/ecosystemProjects";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import {
  Card,
  Logo,
  Label,
  Description,
  Link,
  Categories,
  Category,
} from "./projectEcosystemStyles";

type Project = {
  logo: string;
  name: string;
  link: string;
  categories: string[];
  description: string;
  learnMoreLink: string;
};

type Data = {
  categories: {
    "ecosystem-config": Record<
      string,
      {
        categories: {
          id: string;
          label: string;
        }[];
      }
    >;
  };
};

export const ProjectEcosystemPreview = ({
  entry,
  fieldsMetaData,
}: PreviewTemplateComponentProps) => {
  const { logo, name, link, categories, description, learnMoreLink }: Project =
    entry.getIn(["data"]).toJS();
  const data: Data = fieldsMetaData.toJS();

  return (
    <>
      <Card href={link}>
        <Logo src={logo} />
        <Label>{name}</Label>
        <Description>
          {description}
          {learnMoreLink && (
            <>
              {" "}
              <Link href={learnMoreLink}>Learn more</Link>
            </>
          )}
        </Description>
        <Categories>
          {data?.categories ? (
            categories.map((id) => (
              <Category key={id}>
                {
                  data.categories["ecosystem-config"][id].categories.find(
                    (category) => category.id === id,
                  )?.label
                }
              </Category>
            ))
          ) : (
            <Category key={"loading"}>...</Category>
          )}
        </Categories>
      </Card>
    </>
  );
};

export const registerProjectEcosystemPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    ecosystemProjects.name,
    withStyledComponentsRendered(ProjectEcosystemPreview),
  );
};
