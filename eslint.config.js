import js from "@eslint/js";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jsdoc from "eslint-plugin-jsdoc";
import ts from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    ignores: [],
    languageOptions: {
      parser: ts,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        process: "readonly",
        Buffer: "readonly",
      },
    },
    plugins: {
      jsdoc: jsdoc,
    },
    rules: {
      // Regras recomendadas do ESLint e TypeScript
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      // Configurações para o JSDoc
      "jsdoc/require-jsdoc": [
        "error",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          },
        },
      ],
      "jsdoc/require-param": "error",
      "jsdoc/require-returns": "error",
    },
  },
];
