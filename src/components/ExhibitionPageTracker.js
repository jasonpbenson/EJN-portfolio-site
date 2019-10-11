import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ExhibitionPageTracker = props => {
  const context = props.pageContext
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/exhibitions/" } }
        sort: { fields: frontmatter___year, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              id
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const exhibitions = data.allMarkdownRemark
  console.log("from the sidebar: ", exhibitions)
  return (
    <div>
      {exhibitions.edges.map(({ node }, index) => {
        if (context.slug === exhibitions.edges[index].node.fields.slug) {
          return (
            <div key={node.frontmatter.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.596"
                height="13.795"
                viewBox="0 0 14.596 13.795"
              >
                <ellipse
                  id="ellipse57"
                  cx="7.081"
                  cy="6.667"
                  rx="7.081"
                  ry="6.667"
                  transform="translate(14.596 13.325) rotate(178.097)"
                  fill="#ff5912"
                  opacity="1"
                />
              </svg>
            </div>
          )
        } else {
          return (
            <div key={node.frontmatter.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.596"
                height="13.795"
                viewBox="0 0 14.596 13.795"
              >
                <ellipse
                  id="ellipse57"
                  cx="7.081"
                  cy="6.667"
                  rx="7.081"
                  ry="6.667"
                  transform="translate(14.596 13.325) rotate(178.097)"
                  fill="#8493bf"
                  opacity="0.5"
                />
              </svg>
            </div>
          )
        }
      })}
    </div>
  )
}

export default ExhibitionPageTracker
