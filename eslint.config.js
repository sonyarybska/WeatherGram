import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import esImport from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";

export default tseslint.config(
  { ignores: ["dist", "*.css", "*.svg", "vite.config.*"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-import": esImport,
      "es-prettier": prettier,
      "react-plugin": react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      "react-import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
        },
      ],

      "no-console": "warn",
      "no-use-before-define": "off",
      "no-console": "warn",
      "spaced-comment": "error",
      "no-duplicate-imports": "error",
      "import/prefer-default-export": "off",
      "linebreak-style": "off",

      "no-shadow": "off",
      "max-len": [
        "warn",
        {
          code: 100,
        },
      ],
      "react-plugin/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "error",
      "react-plugin/prop-types": "off",
      "react-plugin/jsx-filename-extension": [
        "warn",
        {
          extensions: [".tsx"],
        },
      ],
      "@typescript-eslint/no-use-before-define": ["error"],
      "@typescript-eslint/no-unused-vars": ["error"],
      // "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
      ],
      "es-prettier/prettier": ["error"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  }
);
