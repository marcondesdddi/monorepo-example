/* eslint-disable prettier/prettier */
module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:@typescript-eslint/recommended"],
  env: {
    es6: true,
    node: true
  },
  plugins: ["prettier"],
  rules: {
    "no-console": 1,
    "prettier/prettier": 2
  }
}
