import Script from 'next/script'
import React, { useEffect } from 'react'
import {
  initializeCMS,
  registerScorecardTable,
  registerSvgWidget,
  registerUuidWidget,
  registerInfoWidget,
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
} from 'features/cms'

export default function Tmp() {
  useEffect(() => {
    //@ts-ignore need to set it here before downloading CMS
    window.CMS_MANUAL_INIT = true
  }, [])
  const initAll = (async () => {

    const CMS = (await import('decap-cms')).default
    globalThis.CMS = window.CMS

    //initialization CMS
    initializeCMS()

    //Custom widgets
    //All custom widgets must be initialized here
    //Editor components:
    //Scorecard:
    registerScorecardTable()
    // Widgets:
    registerSvgWidget()
    registerUuidWidget()
    registerInfoWidget()

    // Previews
    registerFaqPreviewTemplate()
    registerValidatorsPreviewTemplate()
    registerEcosystemPreviewTemplate()
    registerAuditsPreviewTemplate()
    registerProjectEcosystemPreviewTemplate()
    registerProjectConfigEcosystemPreviewTemplate()
    registerProjectValidatorsPreviewTemplate()
    registerFaqWidgetsPreviewTemplate()
    registerStethInDefiProjectPreviewTemplate()
    registerMultichainProjectPreviewTemplate()
    registerMultichainPreviewTemplate()
  })

  return <>
    {/*Could not bypass the issue of importing package directly. Solution from https://github.com/decaporg/decap-cms/issues/6965#issuecomment-2376344845*/}
    <Script
      src="https://cdn.jsdelivr.net/npm/decap-cms@^3.0.0/dist/decap-cms.js"
      strategy="lazyOnload"
      onLoad={async () => {
        await initAll()

      }}
    />
  </>
}
