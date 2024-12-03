import { PreviewTemplateComponentProps } from "netlify-cms-core";
import {
  multichainProjects
} from "features/cms/initialize/collections/";
import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";
import {
  Wrapper,
  Card,
  Logo,
  Link,
  Row,
  Button,
  Projects,
  Project,
  InfoIcon
} from "./multichainProjectStyles";

export const MultichainProjectPreview = ({
  entry,
  fieldsMetaData,
}: PreviewTemplateComponentProps) => {
  const {
    logo,
    name = null,
    description: {
      text = null,
      learnMoreLink = null
    } = {},
    networkType = null,
    stack = null,
    ecosystemProjects = [],
    tooltipLinks: {
      snapshotVoteLink = null,
      deployedAddressesLink = null,
    } = {},
    getLinks: {
      tokenName = null,
      buyLink = null,
      swapLink = null,
      bridgeLink = null,
    } = {},
    ecosystemFilters: {
      network = null,
      tokens: tokensId = []
    } = {},
    feature = false
  } = entry.getIn(["data"]).toJS();
  const data = fieldsMetaData.toJS();

  let ecosystems = data?.ecosystemProjects?.["ecosystem-projects"];
  return (
    <>
      <Wrapper>
        <Card feature={feature.toString()}>
          <InfoIcon hiden={(!snapshotVoteLink && !deployedAddressesLink).toString()}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 21.2C17.081 21.2 21.2 17.081 21.2 12C21.2 6.91898 17.081 2.8 12 2.8C6.91898 2.8 2.8 6.91898 2.8 12C2.8 17.081 6.91898 21.2 12 21.2ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" fill="#131217" fillOpacity="0.2"/>
              <path d="M12.752 7.484C12.296 7.484 11.978 7.4 11.798 7.232C11.618 7.052 11.528 6.842 11.528 6.602C11.528 6.53 11.534 6.446 11.546 6.35C11.558 6.254 11.576 6.152 11.6 6.044C11.66 5.72 11.792 5.468 11.996 5.288C12.212 5.096 12.548 5 13.004 5C13.46 5 13.778 5.09 13.958 5.27C14.138 5.438 14.228 5.642 14.228 5.882C14.228 5.954 14.222 6.038 14.21 6.134C14.198 6.23 14.18 6.332 14.156 6.44C14.096 6.764 13.958 7.022 13.742 7.214C13.538 7.394 13.208 7.484 12.752 7.484ZM11.708 18.698C11.132 18.698 10.7 18.548 10.412 18.248C10.124 17.948 9.98 17.558 9.98 17.078C9.98 16.922 9.992 16.766 10.016 16.61C10.04 16.454 10.07 16.268 10.106 16.052L11.132 10.76H8L8.252 9.194H13.346L11.834 16.988L12.194 17.132L15.308 14.27L16.406 15.26L15.002 16.664C14.63 17.036 14.294 17.354 13.994 17.618C13.694 17.87 13.418 18.08 13.166 18.248C12.914 18.404 12.668 18.518 12.428 18.59C12.2 18.662 11.96 18.698 11.708 18.698Z" fill="#131217" fillOpacity="0.2"/>
            </svg>
          </InfoIcon>
          <Logo src={logo}/>
          <h2>{name || "..."}</h2>
          <p>
            {text || "..."} {learnMoreLink && <><Link>Learn more</Link>.</>}
          </p>
          <Row>
            <span>Network Type</span>
            <span>{networkType || "..."}</span>
          </Row>
          <Row>
            <span>Stack</span>
            <span>{stack || "..."}</span>
          </Row>
          <Button disable={(!tokenName || !(buyLink || swapLink || bridgeLink)).toString()}>
            Get {tokenName || "..."}
          </Button>
        </Card>

        <Card feature={feature.toString()} disable={(ecosystemProjects.length === 0).toString()}>
          <h3>DeFi options for</h3>
          <h2>{name || "..."}</h2>
          <Projects>
            {ecosystemProjects && ecosystemProjects.map((projectId: string) => 
                ecosystems?.[projectId] ? (
                  <Project key={ecosystems[projectId].name}>
                    <img src={ecosystems[projectId].logo} className={"logo"}/>
                    <div className={"text"}>
                      <h5>{ecosystems[projectId].name}</h5>
                      <p className={"description"}>{ecosystems[projectId].l2Description ? ecosystems[projectId].l2Description : ecosystems[projectId].description}</p>
                    </div>
                  </Project>
                ) : null
            )}
          </Projects>
          <Button v2={"true"}  hiden={(!(network && tokensId.length > 0)).toString()}>
            more DeFi options
          </Button>
        </Card>
      </Wrapper>
    </>
  );
};

export const registerMultichainProjectPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    multichainProjects.name,
    withStyledComponentsRendered(MultichainProjectPreview)
  );
};