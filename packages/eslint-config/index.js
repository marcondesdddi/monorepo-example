module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:@typescript-eslint/recommended"],
  env: {
    es6: true,
    node: true
  },
  plugins: ["prettier"],
  rules: {
    "no-console": 1,
    "prettier/prettier": 2,
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-use-before-define": "off"
  }
}
