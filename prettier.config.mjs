/** @type {import("prettier").Config} */
const config = {
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 80,
  semi: true,
  singleQuote: false,
  tailwindStylesheet: "./src/app/globals.css",
  trailingComma: "all",
};

export default config;
