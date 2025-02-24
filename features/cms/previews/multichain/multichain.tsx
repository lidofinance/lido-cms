import { PreviewTemplateComponentProps } from "decap-cms-core";
import { multichain } from "features/cms/initialize/collections/lidoLanding/files/multichain";
import { withStyledComponentsRendered } from "features/cms/utils/StyleInjector";

export const MultichainPreview = ({
  entry,
  fieldsMetaData,
}: PreviewTemplateComponentProps) => {
  const { multichainPage = [] } = entry.getIn(["data"]).toJS();
  const { multichainPage: { ["multichain-projects"]: data = {} } = {} } =
    fieldsMetaData.toJS();
  const namesList = multichainPage
    .map((id: string) => data?.[id]?.name)
    .filter((name: string) => name);
  console.log(multichainPage);
  return (
    <>
      <div>
        <h3>Multichain Page</h3>
        <p>{namesList.join(", ")}</p>
      </div>
    </>
  );
};

export const registerMultichainPreviewTemplate = () => {
  CMS.registerPreviewTemplate(
    multichain.name,
    withStyledComponentsRendered(MultichainPreview)
  );
};
