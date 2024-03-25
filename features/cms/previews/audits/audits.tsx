import { PreviewTemplateComponentProps } from "netlify-cms-core";

import { audits } from "features/cms/initialize/collections/lidoLanding/files/audits";
import { l2Audits } from "features/cms/initialize/collections/lidoLanding/files/l2Audits";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import {
  Card,
  Logos,
  Logo,
  NetworkLogo,
  Text,
  BoldText,
  Link,
} from "./auditsStyles";

type Data = {
  auditsList: {
    logo: string;
    networkLogo: string;
    networkInfo: string;
    dateInfo: string;
    info: string;
    href: string;
  }[];
};

export const AuditsPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const { auditsList }: Data = entry.getIn(["data"]).toJS();

  return (
    <>
      {auditsList?.map((audit) => (
        <Card key={audit.info}>
          <Logos>
            <Logo src={audit.logo} />
            <NetworkLogo src={audit.networkLogo} />
          </Logos>
          <Text>
            {audit.networkInfo} | {audit.dateInfo}
          </Text>
          <BoldText>{audit.info}</BoldText>
          <Link href={audit.href}>See report</Link>
        </Card>
      ))}
    </>
  );
};

export const registerAuditsPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    audits.name,
    withStyledComponentsRendered(AuditsPreview)
  );
  CMS.registerPreviewTemplate(
    l2Audits.name,
    withStyledComponentsRendered(AuditsPreview)
  );
};
