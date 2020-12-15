module.exports = {
  root: true,
  extends: ["airbnb-typescript-prettier"],
  env: {
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx", ".js"] }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/prefer-default-export": "off",
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["error"]
      }
    }
  ]  
};
