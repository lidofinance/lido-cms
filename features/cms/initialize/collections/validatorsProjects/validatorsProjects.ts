import type { CmsCollection, CmsField } from "netlify-cms-core";

export const validatorsProjects: CmsCollection = {
  name: "validators-projects",
  label: "Validators (Projects)",
  folder: "lido-landing/validators/projects",
  create: true,
  slug: "{{fields.id}}",
  summary: `{{fields.name}}`,
  sortable_fields: [],
  fields: [
    {
      name: "id",
      widget: "uuid",
      hide: true,
    } as unknown as CmsField,
    {
      label: "Logo",
      name: "logo",
      widget: "svg",
      hint: "The size of the image should be 200x84",
      options: {
        size: {
          width: 200,
          height: 84
        }
      }
    } as unknown as CmsField,
    { label: "Name", name: "name", widget: "string" },
    { label: "Link", name: "link", widget: "string" },
  ],
};
