module.exports = {
    extends: ["alloy", "alloy/typescript", "plugin:unicorn/recommended"],
    ignorePatterns: ["**/migrations/*.ts", "dist/*"],
    env: {
        // Your environments (which contains several predefined global variables)
        // browser: true,
        node: true,
        // mocha: true,
        jest: true,
    },
    globals: {
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        // Customize your rules
    },
    overrides: [
        {
            files: ["*.resolver.ts"],
            rules: {
                "max-params": 0,
            },
        },
    ],
};
