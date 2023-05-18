import { useEffect } from "react";
import { initializeCMS, registerScorecardTable } from "features/cms";

import { mediaLibrary } from "features/cms/mediaLibrary/mediaLibrary";

export default function Tmp() {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      globalThis.CMS = CMS;

      CMS.registerMediaLibrary(mediaLibrary);

      // initialization CMS
      initializeCMS();

      // Custom widgets
      // All custom widgets must be initialized here
      // Scorecard:
      registerScorecardTable();
    })();
  }, []);

  return <></>;
}
