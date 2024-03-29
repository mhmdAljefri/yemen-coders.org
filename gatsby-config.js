module.exports = {
  siteMetadata: {
    title: `Yemen Coders Official Site`,
    description: ``,
    siteUrl: "https://yemencoders.org",
    author: `@yemenCoders`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": "AuthorYaml",
    "MarkdownRemark.frontmatter.sponsor": "SponsorYaml",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-authors-yaml",
    "gatsby-transformer-sponsors-yaml",
    "gatsby-plugin-netlify",
    "gatsby-plugin-twitter",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yemen Coders Orgnization`,
        short_name: `ye-coders`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#c0170b`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
