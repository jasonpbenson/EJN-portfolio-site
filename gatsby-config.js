module.exports = {
  siteMetadata: {
    title: "ERIN JANE NELSON",
    description: "EJN Portfolio Site",
    author: "Jason Benson",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown/test-data`,
        name: "markdown-test-data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown/exhibition-data`,
        name: "markdown-exhibition-data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown/page-data`,
        name: "markdown-page-data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: `image-uploads`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "erin-jane-nelson",
        short_name: "ejn",
        start_url: "/",
        background_color: "#c6b6e0",
        theme_color: "#c6b6e0",
        display: "minimal-ui",
      },
    },
  ],
}
