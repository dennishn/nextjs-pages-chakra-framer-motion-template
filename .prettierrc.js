module.exports = {
    /**
     * Many of the options here are the default options in Prettier, but we're setting them here to make it explicit and visible.
     * When we defer to Prettiers defaults, we're doing so intentionally and will add a comment to that option to make it explicit and visible.
     */
    arrowParens: "always",
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: "auto",
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "css",
    jsxSingleQuote: false,
    printWidth: 80,
    proseWrap: "preserve",
    quoteProps: "as-needed",
    requirePragma: false,
    semi: true,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 4, // AKQA opinionated
    trailingComma: "all",
    useTabs: true, // AKQA opinionated
    overrides: [
        // formatting the package.json with anything other than spaces will cause issues when running install...
        {
            files: ["**/package.json"],
            options: {
                useTabs: false,
            },
        },
        {
            files: ["**/*.mdx"],
            options: {
                // This stinks, if you don't do this, then an inline component on the
                // end of the line will end up wrapping, then the next save prettier
                // will add an extra line break. Super annoying and probably a bug in
                // prettier, but until it's fixed, this is the best we can do.
                proseWrap: "preserve",
                htmlWhitespaceSensitivity: "ignore",
            },
        },
    ],
};
