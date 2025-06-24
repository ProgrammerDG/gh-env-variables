module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true  // ✅ Add this to recognize test, expect, etc.
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    settings: {
        react: {
            version: "detect"  // ✅ Add this to avoid version warning
        }
    },
    rules: {
        // You can add custom rules here if needed
    }
};
