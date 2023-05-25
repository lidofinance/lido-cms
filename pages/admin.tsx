import React, { useEffect } from "react";
import {
  initializeCMS,
  registerScorecardTable,
  registerSvgWidget,
  registerUuidWidget,
} from "features/cms";

export default function Tmp() {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
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
    })();
  }, []);

  return <></>;
}
