import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Index({ data }) {
  const { edges: tests } = data.allMarkdownRemark
  return (
    <div>
      {tests
        .filter(test => test.node.frontmatter.title.length > 0)
        .map(({ node: test }) => {
          return (
            <div key={test.date}>
              <h1>
                <Link to={test.frontmatter.path}>{test.frontmatter.title}</Link>
              </h1>
              <h2>{test.frontmatter.date}</h2>
              <p>{test.excerpt}</p>
            </div>
          )
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 20)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
