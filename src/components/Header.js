import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import { globalHistory } from "@reach/router"

globalHistory.listen(({ location }) => {
  console.log("location changed", location)
})

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/exhibitions/" } }
      ) {
        edges {
          node {
            id
          }
        }
        nodes {
          fields {
            slug
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let queryNodes = data.allMarkdownRemark.nodes
  let exhibitionSlugs = []

  queryNodes.forEach(index => {
    exhibitionSlugs.push(index.fields.slug)
  })

  const HeaderContainer = styled.div`
    * {
      margin-bottom: 0;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    a : hover{
      color: #ff5912
    }
    .header-column-1{
      text-align: right;
      h1 {
        color: #2f2c5d;
        font-size: 24px;
      }
      h2 {
        color: ${
          window.location.pathname === "/information/" ? "#ff5912" : "#8493bf"
        };
        font-size: 20px;
      }
    }
    .header-column-2{;
      text-transform: lowercase;
      h2 {
        color: ${
          window.location.pathname === "/exhibition-list"
            ? "#ff5912"
            : exhibitionSlugs.includes(window.location.pathname)
            ? "#ff5912"
            : "#8493bf"
        };
        font-size: 40px;
      }
    }
    align-items: flex-end;
    justify-content: space-between;
    display: flex;
    flex-flow: column wrap
    height: 50px;
    margin: 2% 6%;
  `
  return (
    <HeaderContainer>
      <div className="header-column-1">
        <header>
          <h1>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </h1>
        </header>
        <nav>
          <h2>
            <Link to="/information/">INFORMATION</Link>
          </h2>
        </nav>
      </div>
      <div className="header-column-2">
        <nav>
          <h2>
            <Link to="/exhibition-list">exhibitions</Link>
          </h2>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
