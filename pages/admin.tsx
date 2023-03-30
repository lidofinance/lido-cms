import { useEffect } from "react";
import { initializeCMS, registerTable } from "widgets/cms";

export default function Tmp() {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      globalThis.CMS = CMS;

      initializeCMS();
      registerTable();
    })();
  }, []);

  return <></>;
}
