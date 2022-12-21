export const nanoYaml = {
    encode: jsyaml.dump,
    decode: jsyaml.load 
};

export const renderCustomDirective = (name, options) => (
    `:::${name}\n` + 
    (options ? nanoYaml.encode(options) : "") +
    ":::"
);

export const customDirectivePattern = name => new RegExp(`^:::${name}\\n([\\s\\S]+?\\n)?:::$`, "m");

export const registerCustomDirective = (name, options) => CMS.registerEditorComponent({
    id: name,
    label: options.label || `${name[0].toUpperCase()}${name.slice(1)}`,
    pattern: customDirectivePattern(name),
    fromBlock([, options]) {
        return {
            ...nanoYaml.decode(options)
        };
    },
    toBlock: (options) => renderCustomDirective(name, options),
    ...options,
});
