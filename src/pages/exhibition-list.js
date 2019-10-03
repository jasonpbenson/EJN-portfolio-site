import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

const exhibitionList = ({ data }) => {
  const exhibitions = data.allMarkdownRemark
  return (
    <Layout>
      <div>
        {exhibitions.edges.map(({ node }) => {
          return (
            <div key={node.frontmatter.id}>
              <h1>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h1>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
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
`

export default exhibitionList
