const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("current", "&.active");
    })
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  }
};
