import { PreviewTemplateComponentProps } from "decap-cms-core";

import {
  stethInDefiProject,
  categoryList,
} from "features/cms/initialize/collections/stethInDefiProject/stethInDefiProject";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import {
  Card,
  Logo,
  NameWrapper,
  Name,
  Row,
  Label,
  Block,
  FlexColumnWrapper,
  Text,
} from "./stethInDefiProjectStyles";

type Project = {
  name: string;
  categoryId: string;
  curatorId: string;
  protocol?: string;
  depositableTokenId: string;
  networkId: string;
  additionalRewardsId: string[];
  additionalRewardsLabel?: string;
  link: string;
  featureMode: {
    active: boolean;
    image?: string;
  };
  urgentMode: {
    active: boolean;
    title?: string;
    linkLabel?: string;
  };
};

type Data = Record<
  string,
  {
    "steth-in-defi-config": Record<
      string,
      Record<
        string,
        {
          id: string;
          logo: string;
          label: string;
        }[]
      >
    >;
  }
>;
export const StethInDefiProjectPreview = ({
  entry,
  fieldsMetaData,
}: PreviewTemplateComponentProps) => {
  const {
    name,
    categoryId,
    curatorId,
    protocol,
    depositableTokenId,
    networkId,
    additionalRewardsId,
    additionalRewardsLabel,
    featureMode,
    urgentMode,
  }: Project = entry.getIn(["data"]).toJS();
  const data: Data = fieldsMetaData.toJS();

  let config;
  if (data?.curatorId)
    config = data.curatorId?.["steth-in-defi-config"]?.[curatorId];
  else if (!config && data?.depositableTokenId)
    config =
      data.depositableTokenId?.["steth-in-defi-config"]?.[depositableTokenId];
  else if (!config && data?.networkId)
    config = data.networkId?.["steth-in-defi-config"]?.[networkId];
  else if (!config && data?.additionalRewardsId)
    config =
      data.additionalRewardsId?.["steth-in-defi-config"]?.[
        additionalRewardsId[0]
      ];

  const categoryName =
    categoryList.find((category) => category.value === categoryId)?.label ?? "";
  const { logo: curatorLogo, label: curatorLabel } =
    config?.curators.find((item) => item.id === curatorId) ?? {};
  const { logo: depositableTokenLogo, label: depositableTokenLabel } =
    config?.depositableTokens.find((item) => item.id === depositableTokenId) ??
    {};
  const { logo: networkLogo } =
    config?.networks.find((item) => item.id === networkId) ?? {};
  const additionalRewards =
    config?.additionalRewards?.filter((item) =>
      additionalRewardsId?.includes(item.id),
    ) ?? [];
  const [additionalRewardsLogos, additionalRewardsLabels] =
    additionalRewards?.reduce<[string[], string[]]>(
      ([a, b], item) => {
        a.push(item.logo);
        b.push(item.label);
        return [a, b];
      },
      [[], []],
    );
  const { active: activeFeatureMode, image: imageFeatureMode } = featureMode;
  const {
    active: activeurgentMode,
    title: titleUrgentMode,
    linkLabel: linkLabelUrgentMode,
  } = urgentMode;

  return (
    <>
      <Card feature={activeFeatureMode} urgent={activeurgentMode}>
        {activeurgentMode ? (
          <>
            <Name>{titleUrgentMode}</Name>
            <Label>{linkLabelUrgentMode}</Label>
          </>
        ) : (
          <>
            {activeFeatureMode && imageFeatureMode && (
              <Logo src={imageFeatureMode} />
            )}
            <NameWrapper>
              <Name>{name}</Name>
              <Label>{categoryName}</Label>
            </NameWrapper>
            <Row>
              <Label>Curator/Protocol</Label>
              <Block>
                <img src={curatorLogo} />
                <FlexColumnWrapper>
                  <Text>{curatorLabel}</Text>
                  {protocol && <Label>{protocol}</Label>}
                </FlexColumnWrapper>
              </Block>
            </Row>
            <Row>
              <Label>Depositable Token</Label>
              <Block>
                <img src={networkLogo} className={"networkLogo"} />
                <img src={depositableTokenLogo} />
                <Text>{depositableTokenLabel}</Text>
              </Block>
            </Row>
            <Row>
              <FlexColumnWrapper>
                <Label>Additional Rewards</Label>
                <FlexColumnWrapper>
                  <Block>
                    {additionalRewardsLogos.map((item, index) => (
                      <img key={index} src={item} />
                    ))}
                  </Block>
                  <Text>
                    {additionalRewardsLabels.join(" + ")}{" "}
                    <strong>{additionalRewardsLabel ?? "Points"}</strong>
                  </Text>
                </FlexColumnWrapper>
              </FlexColumnWrapper>
            </Row>
          </>
        )}
      </Card>
    </>
  );
};

export const registerStethInDefiProjectPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    stethInDefiProject.name,
    withStyledComponentsRendered(StethInDefiProjectPreview),
  );
};
