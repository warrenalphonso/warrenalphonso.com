module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  // Allows ESLint to understand TypeScript syntax
  parser: "@typescript-eslint/parser",

  // AirBNB's TypeScript style guide requires access of our tsconfig.json.
  // parserOptions: {
  //   sourceType: "module",
  //   project: "./tsconfig.json",
  // },

  // Plugins don't enforce any rules, we have to manually enable them!
  plugins: ["@typescript-eslint", "prettier", "jest", "react", "react-hooks"],

  // Extends automatically enforces all their rules.
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    // Uses type-aware linting - builds then lints so takes longer
    // "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    // "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],

  rules: {
    // Adds a rule to ESLint that formats content using Prettier
    "prettier/prettier": [
      "error",
      {
        semi: false,
        endOfLine: "auto",
      },
    ],
    "react/prop-types": 0, // Not using prop-types because we have TypeScript
    // JSX may only be in .js and .jsx files
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    // Allow console statements. Disable this before exporting to binary
    "no-console": "off",
    // Allow variable names prepended with underscore
    "no-underscore-dangle": "off",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "no-throw-literal": "off",
    // Useless for React Native because no <span /> tags
    "jsx-a11y/accessible-emoji": "off",
    // I like using () => {} as default functions
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
  },

  // Allow absolute imports: See docs/CodeStyle.md if I want to change this.
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
}
