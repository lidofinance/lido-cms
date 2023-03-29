import jsyaml from "js-yaml";

declare var CMS: any;

export const renderCustomDirective = (name: string, options: any) =>
  `:::${name}\n` + (options ? jsyaml.dump(options) : "") + ":::";

export const customDirectivePattern = (name: string) =>
  new RegExp(`^:::${name}\\n([\\s\\S]+?\\n)?:::$`, "m");

export const registerCustomDirective = (name: string, options: any) =>
  CMS.registerEditorComponent({
    id: name,
    label: options.label || `${name[0].toUpperCase()}${name.slice(1)}`,
    pattern: customDirectivePattern(name),
    fromBlock([, options]: any) {
      return {
        // @ts-expect-error not sure what is going on
        ...jsyaml.load(options),
      };
    },
    toBlock: (options: any) => renderCustomDirective(name, options),
    ...options,
  });
