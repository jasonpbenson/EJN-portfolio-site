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
  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___year] }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    const dataSort = result.data.allMarkdownRemark.edges

    dataSort.forEach(({ node }, index) => {
      let pathName, component, context

      pathName = node.fields.slug
      component = path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      )
      if (node.frontmatter.templateKey === "exhibition") {
        context = {
          slug: node.fields.slug,
          previous: index === 0 ? null : dataSort[index - 1].node,
          next: index === dataSort.length - 1 ? null : dataSort[index + 1].node,
        }
      } else {
        context = {
          slug: node.fields.slug,
        }
      }

      createPage({
        path: pathName,
        component: component,
        context: context,
      })
    })
  })
}
