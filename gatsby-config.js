module.exports = {
  siteMetadata: {
    title: `Yemnies Coders Official Site`,
    description: ``,
    siteUrl: 'https://yemenies-coders.org',
    author: `@yemeniesCoders`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
    'MarkdownRemark.frontmatter.sponsor': 'SponsorYaml',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-authors-yaml',
    'gatsby-transformer-sponsors-yaml',
    'gatsby-plugin-netlify',
    'gatsby-plugin-twitter',
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
        plugins: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
