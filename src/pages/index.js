import React from "react"
// import { Link, graphql } from "gatsby"
// import { Helmet } from "react-helmet"

// import ExhibitionList from "../components/ImageGalleries/ExhibitionList"

export default function Index({ data }) {
  const { edges: exhibitions } = data.allMarkdownRemark
  console.log(exhibitions)
  return (
    <div>
      {exhibitions.map(({ node: exhibition }) => {
        return (
          <div key={exhibition.frontmatter.id}>
            <h1>{exhibition.frontmatter.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query ExhibitionListQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/exhibition-data/" } }
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
