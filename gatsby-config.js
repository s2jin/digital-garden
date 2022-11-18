module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/home`,
        parseWikiLinks: `true`,
        preset: "@theme-ui/preset-funk",
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: `digital garden`,
  },
}
