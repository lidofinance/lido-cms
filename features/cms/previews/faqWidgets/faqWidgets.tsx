import { PreviewTemplateComponentProps } from "netlify-cms-core";

// FAQ Frontend Template
import { indexPage as ftIndexPage } from "features/cms/initialize/collections/frontendTemplate/files/indexPage";
import { examplePage as ftExamplePage } from "features/cms/initialize/collections/frontendTemplate/files/examplePage";

// FAQ Ethereum Staking Widget
import { stakePage as eswStakePage } from "features/cms/initialize/collections/ethereumStakingWidget/files/stakePage";
import { withdrawalsPageRequestTab as eswWithdrawalsPageRequestTab } from "features/cms/initialize/collections/ethereumStakingWidget/files/withdrawalsPageRequestTab";
import { withdrawalsPageClaimTab as eswWithdrawalsPageClaimTab } from "features/cms/initialize/collections/ethereumStakingWidget/files/withdrawalsPageClaimTab";
import { wrapAndUnwrapPage as eswWrapAndUnwrapPage } from "features/cms/initialize/collections/ethereumStakingWidget/files/wrapAndUnwrapPage";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import { Text, Bold, Box } from "./faqWidgetsStyles";

type Data = {
  pageIdentification?: string;
  faq?: {
    questionId: string;
    question: string;
    answer: string;
  }[];
};

export const FaqWidgetsPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const { pageIdentification, faq }: Data = entry.getIn(["data"]).toJS();

  return (
    <>
      <Text>
        <Bold>Page identification:</Bold> {pageIdentification}
      </Text>
      {faq?.map(({ questionId, question, answer }) => (
        <Box key={question}>
          <Text>question ID: {questionId}</Text>
          <Text>question: {question}</Text>
          <Text>answer: {answer}</Text>
        </Box>
      ))}
    </>
  );
};

export const registerFaqWidgetsPreviewTemplate = () => {
  // FAQ Frontend Template
  CMS.registerPreviewTemplate(
    ftIndexPage.name,
    withStyledComponentsRendered(FaqWidgetsPreview)
  );
  CMS.registerPreviewTemplate(
    ftExamplePage.name,
    withStyledComponentsRendered(FaqWidgetsPreview)
  );

  // FAQ Ethereum Staking Widget
  CMS.registerPreviewTemplate(
    eswStakePage.name,
    withStyledComponentsRendered(FaqWidgetsPreview)
  );
  CMS.registerPreviewTemplate(
    eswWrapAndUnwrapPage.name,
    withStyledComponentsRendered(FaqWidgetsPreview)
  );
  CMS.registerPreviewTemplate(
    eswWithdrawalsPageRequestTab.name,
    withStyledComponentsRendered(FaqWidgetsPreview)
  );
  CMS.registerPreviewTemplate(
    eswWithdrawalsPageClaimTab.name,
    withStyledComponentsRendered(FaqWidgetsPreview)
  );
};
