const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages ` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/exhibition-pages-data/" } }
          sort: { order: ASC, fields: [frontmatter___year] }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const exhibitions = result.data.allMarkdownRemark.edges
      exhibitions.forEach(({ node }, index) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/exhibition.js`),
          context: {
            slug: node.fields.slug,
            previous: index === 0 ? null : exhibitions[index - 1].node,
            next:
              index === exhibitions.length - 1
                ? null
                : exhibitions[index + 1].node,
          },
        })
      })
      resolve()
    })
  })
}

//   data.allMarkdownRemark.edges.forEach(edge => {
//     const slug = edge.node.fields.slug
//     actions.createPage({
//       path: slug,
//       component: exhibitionTemplate,
//       context: { slug: slug },
//     })
//   })
// }
