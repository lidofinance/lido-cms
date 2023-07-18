import { PreviewTemplateComponentProps } from "netlify-cms-core";

export const EcosystemConfigPreview = ({ isLoadingAsset, fieldsMetaData }: PreviewTemplateComponentProps) => {
  if (isLoadingAsset) {
    return null;
  }
  const { pages } = fieldsMetaData.toJS() as {
    pages?: Record<string, {
      "ecosystem-projects": Record<string, {
        id: string,
        name: string
      }>
    }>
  };
  if (!pages) {
    return null;
  }

  return <>
    {
      [...Object.entries(pages)].map(([key, value]) => <div key={key}>
        <h3>{key}</h3>
        {
          [...Object.values(value["ecosystem-projects"])].map((project, index) =>
            <span className="ecosystemProject" key={project.id}>
              {index === 0 ? null : '; '}
            {project.name}
          </span>)
        }
      </div>)
    }
  </>;
};
