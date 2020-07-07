module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
