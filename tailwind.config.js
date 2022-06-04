module.exports = {
  theme: {
    extend: {
      colors: {
        home: "#283618",
        about: "#AC6C25",
        links: "#606C38",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.js",
      "layouts/**/*.js",
      "pages/**/*.js",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
  },
}
