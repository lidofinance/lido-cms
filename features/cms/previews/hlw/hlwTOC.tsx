import { PreviewTemplateComponentProps } from "decap-cms-core";

import { howLidoWorksAll } from "features/cms/initialize/collections/howLidoWorks/howLidoWorksTOC";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";
import { InnerUL, MainUL } from "./hlwTOCStyles";

type Data = {
  categoryName?: string;
  articles?: { article: string }[];
  categories: Data[];
};

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
  const { mainCategories }: { mainCategories: Data[] } = entry
    .getIn(["data"])
    .toJS();

  const { mainCategories: additionalData } = fieldsMetaData.toJS() as {
    mainCategories: CategoriesData;
  };
  const allArticles =
    additionalData?.categories?.articles?.article?.HowLidoWorksArticle || {};

  const renderSubList = (categories: Data[]) => {
    if (categories.length === 0) {
      return <></>;
    }
    return categories.map((subCat) => {
      const articlesList = subCat.articles && (
        <InnerUL>
          {subCat.articles.map(({ article }, i) => {
            return <li key={i}>{allArticles[article]?.title}</li>;
          })}
        </InnerUL>
      );
      if (!subCat.categoryName) {
        return articlesList;
      }
      return (
        <li key={subCat.categoryName}>
          <div>{subCat.categoryName}</div>
          {renderSubList(subCat.categories || [])}
          {articlesList}
        </li>
      );
    });
  };
  return <MainUL>{renderSubList(mainCategories)}</MainUL>;
};

export const registerHlwTOCPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    howLidoWorksAll.name,
    withStyledComponentsRendered(HLWTOCPreview),
  );
};
