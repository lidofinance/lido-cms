import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { faq as faqFrontendTemplate } from "features/cms/initialize/collections/frontendTemplate/files/faq";
import { faq as faqEthereumStakingWidget } from "features/cms/initialize/collections/ethereumStakingWidget/files/faq";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Wrapper, Text, Bold, Box } from "./faqWidgetsStyles";

type Data = {
  pages: {
    identification?: string;
    faq?: {
      questionId: string;
      question: string;
      answer: string;
    }[];
  }[];
};

export const FaqWidgetsPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const { pages }: Data = entry.getIn(["data"]).toJS();

  return (
    <>
      {pages?.map((pages) => (
        <Wrapper key={pages.identification}>
          <Text>
            <Bold>Page identification:</Bold> {pages.identification}
          </Text>
          {pages.faq?.map(({ questionId, question, answer }) => (
            <Box key={question}>
              <Text>question ID: {questionId}</Text>
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
    faqFrontendTemplate.name,
    withStyledComponentsRendered(FaqWidgetsPreview)
  );
  CMS.registerPreviewTemplate(
    faqEthereumStakingWidget.name,
    withStyledComponentsRendered(FaqWidgetsPreview)
  );
};
