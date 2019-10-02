import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/exhibition-pages-data/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
                id
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.frontmatter.id}>
              <h1>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h1>
            </div>
          )
        })}
      </div>
    )}
  />
)
