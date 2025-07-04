import React, { useEffect } from "react";
import {
  initializeCMS,
  registerScorecardTable,
  registerSvgWidget,
  registerUuidWidget,
  registerInfoWidget,
  registerReadonlyAfterCreationWidget,
  registerFaqPreviewTemplate,
  registerValidatorsPreviewTemplate,
  registerEcosystemPreviewTemplate,
  registerAuditsPreviewTemplate,
  registerProjectEcosystemPreviewTemplate,
  registerProjectConfigEcosystemPreviewTemplate,
  registerProjectValidatorsPreviewTemplate,
  registerFaqWidgetsPreviewTemplate,
  registerStethInDefiProjectPreviewTemplate,
  registerMultichainProjectPreviewTemplate,
  registerMultichainPreviewTemplate,
  registerFeatureFlagPreviewTemplate,
} from "features/cms";

export default function Tmp() {
  useEffect(() => {
    (async () => {
      const CMS = (await import("decap-cms-app")).default;
      globalThis.CMS = CMS;

      // initialization CMS
      initializeCMS();

      // Custom widgets
      // All custom widgets must be initialized here
      // Editor components:
      // Scorecard:
      registerScorecardTable();
      // Widgets:
      registerSvgWidget();
      registerUuidWidget();
      registerInfoWidget();
      registerReadonlyAfterCreationWidget();

      // Previews
      registerFaqPreviewTemplate();
      registerValidatorsPreviewTemplate();
      registerEcosystemPreviewTemplate();
      registerAuditsPreviewTemplate();
      registerProjectEcosystemPreviewTemplate();
      registerProjectConfigEcosystemPreviewTemplate();
      registerProjectValidatorsPreviewTemplate();
      registerFaqWidgetsPreviewTemplate();
      registerStethInDefiProjectPreviewTemplate();
      registerMultichainProjectPreviewTemplate();
      registerMultichainPreviewTemplate();
      registerFeatureFlagPreviewTemplate();
    })();
  }, []);

  return <></>;
}
