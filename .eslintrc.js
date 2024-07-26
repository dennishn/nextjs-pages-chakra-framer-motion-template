module.exports = {
    plugins: ["@typescript-eslint", "sonarjs"],
    extends: ["next/core-web-vitals", "prettier", "plugin:sonarjs/recommended-legacy"],
    root: true,
    parser: "@typescript-eslint/parser",
    rules: {
        "no-console": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                prefer: "type-imports",
                fixStyle: "separate-type-imports",
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                ignoreRestSiblings: true,
            },
        ],
    },
};
