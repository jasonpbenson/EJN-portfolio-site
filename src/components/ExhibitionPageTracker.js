import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
  const SvgContainer = styled.div`
    ul {
      list-style: none;
    }
    li {
      display: flex;
      align-items: center;
      height: 30px;
    }
    svg {
      transform: scale(0.5);
    }
    height: fit-content;
    position: fixed;
    right: 8%;
    top: 30%;
    z-index: 200;
    @media screen and (max-width: 900px) {
      top: 20%;
    }
    @media screen and (max-width: 679px) {
      display: none;
    }
  `
  return (
    <SvgContainer>
      <ul>
        {exhibitions.edges.map(({ node }, index) => {
          if (context.slug === exhibitions.edges[index].node.fields.slug) {
            return (
              <li key={node.frontmatter.id}>
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
              </li>
            )
          } else {
            return (
              <li key={node.frontmatter.id}>
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
              </li>
            )
          }
        })}
      </ul>
    </SvgContainer>
  )
}

export default ExhibitionPageTracker
