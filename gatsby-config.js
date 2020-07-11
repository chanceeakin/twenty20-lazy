module.exports = {
  siteMetadata: {
    title: `Chance Eakin, Software Engineer`,
    description: `Portfolio site for Chance Eakin, an engineer in Austin, Texas`,
    author: `@chanceeakin`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-86915404-2",
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  ],
}
