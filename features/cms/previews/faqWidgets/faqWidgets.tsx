import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { faq } from "features/cms/initialize/collections/frontendTemplate/files/faq";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Wrapper, Text, Bold, Box } from "./faqWidgetsStyles";

type Pages = {
  name?: string;
  "q&a"?: {
    question: string;
    answer: string;
  }[];
}[];

export const FaqWidgetsPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const pages: Pages = entry.getIn(["data", "pages"]).toJS();

  return (
    <>
      {pages?.map((pages) => (
        <Wrapper key={pages.name}>
          <Text>
            <Bold>category name:</Bold> {pages.name}
          </Text>
          {pages["q&a"]?.map(({ question, answer }) => (
            <Box key={question}>
              <Text>question: {question}</Text>
              <Text>answer: {answer}</Text>
            </Box>
          ))}
        </Wrapper>
      ))}
    </>
  );
};

export const registerFaqWidgetsPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    faq.name,
    withStyledComponentsRendered(FaqWidgetsPreview)
  );
};
