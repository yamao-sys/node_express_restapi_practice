module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["dist", ".eslintrc.js"],
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/quotes": ["error", "single"],
		"linebreak-style": ["error", "unix"],
		"no-trailing-spaces": ["error"],
		"no-useless-escape": ["off"],
		"semi": ["off"],
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/indent": ["error", "tab"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  },
};
