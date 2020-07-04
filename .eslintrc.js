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
  ],
  rules: {
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/camelcase": "off",
  },
};
