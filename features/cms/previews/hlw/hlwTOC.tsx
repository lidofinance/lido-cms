import { PreviewTemplateComponentProps } from "decap-cms-core";

import { howLidoWorksAll } from "features/cms/initialize/collections/howLidoWorks/howLidoWorksTOC";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";
import { InnerUL, MainUL } from "./hlwTOCStyles";

type Data = {
  mainCategoryName: string;
  categories: { categoryName: string; articles: { article: string }[] }[];
}[];
type CategoriesData = {
  categories: {
    articles: {
      article: {
        HowLidoWorksArticle: { [key: string]: { title: string; id: string } };
      };
    };
  };
};

export const HLWTOCPreview = ({
  entry,
  fieldsMetaData,
}: PreviewTemplateComponentProps) => {
  const { mainCategories }: { mainCategories: Data } = entry
    .getIn(["data"])
    .toJS();

  const { mainCategories: additionalData } = fieldsMetaData.toJS() as {
    mainCategories: CategoriesData;
  };
  const allArticles =
    additionalData?.categories?.articles?.article?.HowLidoWorksArticle || {};
  return (
    <>
      <MainUL>
        {mainCategories.map((category) => (
          <li key={category.mainCategoryName}>
            {category.mainCategoryName}

            <InnerUL>
              {category.categories.map((subCat) => {
                const articlesList = subCat.articles && (
                  <ul>
                    {subCat.articles.map(({ article }, i) => {
                      return <li key={i}>{allArticles[article]?.title}</li>;
                    })}
                  </ul>
                );
                if (!subCat.categoryName) {
                  return articlesList;
                }
                return (
                  <li key={subCat.categoryName}>
                    <div>{subCat.categoryName}</div>
                    {articlesList}
                  </li>
                );
              })}
            </InnerUL>
          </li>
        ))}
      </MainUL>
    </>
  );
};

export const registerHlwTOCPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    howLidoWorksAll.name,
    withStyledComponentsRendered(HLWTOCPreview),
  );
};
