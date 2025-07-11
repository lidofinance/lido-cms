import { PreviewTemplateComponentProps } from "decap-cms-core";

import { featureFlags } from "features/cms/initialize/collections/lidoLanding/files/featureFlags";

import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

import {
  Card,
  Header,
  Name,
  Description,
  Label,
  Status,
  EnvironmentToggle,
  ToggleContainer,
} from "./featureFlagStyles";

type FeatureFlag = {
  name: string;
  description?: string;
  testnetEnabled: boolean;
  productionEnabled: boolean;
};

type FeatureFlagsData = {
  flags: FeatureFlag[];
};

export const FeatureFlagPreview = ({
  entry,
}: PreviewTemplateComponentProps) => {
  const data: FeatureFlagsData = entry.getIn(["data"]).toJS();
  const flags = data.flags || [];

  if (flags.length === 0) {
    return (
      <div
        style={{
          padding: "16px",
          textAlign: "center",
          color: "#666",
          fontSize: "14px",
        }}
      >
        No feature flags configured yet. Add your first flag!
      </div>
    );
  }

  return (
    <div>
      <h2
        style={{
          marginBottom: "12px",
          color: "#2c3e50",
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        Feature Flags ({flags.length})
      </h2>
      {flags.map((flag, index) => {
        const anyEnabled = flag.testnetEnabled || flag.productionEnabled;

        return (
          <Card key={index} enabled={anyEnabled}>
            <Header>
              <div>
                <Name>{flag.name}</Name>
                {flag.description && (
                  <Description>{flag.description}</Description>
                )}
              </div>
            </Header>

            <ToggleContainer>
              <EnvironmentToggle>
                <Label>Testnet:</Label>
                <Status enabled={flag.testnetEnabled}>
                  {flag.testnetEnabled ? "ENABLED" : "DISABLED"}
                </Status>
              </EnvironmentToggle>

              <EnvironmentToggle>
                <Label>Production:</Label>
                <Status enabled={flag.productionEnabled}>
                  {flag.productionEnabled ? "ENABLED" : "DISABLED"}
                </Status>
              </EnvironmentToggle>
            </ToggleContainer>
          </Card>
        );
      })}
    </div>
  );
};

export const registerFeatureFlagPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    featureFlags.name,
    withStyledComponentsRendered(FeatureFlagPreview),
  );
};

export { featureFlags };
