import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import navIcon from "../assets/images/svg-icons/nav-icon.svg"

const exhibitionList = ({ data }) => {
  const ExhibitionListStyles = styled.div`
    a {
      color: inherit;
      text-decoration: none;
    }
    a: hover {
      color: #ff5912;
    }
    ul {
      list-style: none;
    }
    li {
      display: flex;
      align-items: center;
      height: 30px;
      justify-content: flex-end;
    }
    h2 {
      color: #8493bf;
    }
    svg {
      margin-bottom: 18px;
      position: fixed;
      right: 8%;
      transform: scale(0.5);
    }
    display: flex;
    flex-direction: column;
    height: fit-content;
    position: fixed;
    right: 14%;
    top: 30%;
    width: 80%;
    @media screen and (max-width: 899px) {
      top: 20%;
    }
    @media screen and (max-width: 679px) {
      top: 30%;
    }
    @media screen and (max-width: 499px) {
      h2 {
        font-size: 5vw;
      }
      top: 25%;
    }
  `
  const NavIconStyles = styled.img`
    position: fixed;
    height: fit-content;
    right: 8%;
    top: 14%;
    width: 109.828px;
    @media screen and (max-width: 679px) {
      top: 19vw;
      transform: scale(0.8);
      z-index: 200;
    }
  `

  const exhibitions = data.allMarkdownRemark
  return (
    <ExhibitionListStyles>
      <div>
        <NavIconStyles src={navIcon} alt="exhibition pages navigation icon" />
      </div>
      <ul>
        {exhibitions.edges.map(({ node }) => {
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
                  fill="#8493bf50"
                />
              </svg>
              <h2>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h2>
            </li>
          )
        })}
      </ul>
    </ExhibitionListStyles>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/exhibitions/" } }
      sort: { fields: frontmatter___year, order: DESC }
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
