import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <header>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </header>
      <nav>
        <h3>
          <Link to="/information/">INFORMATION</Link>
        </h3>
        <h1>
          <Link to="/exhibition-list">exhibitions</Link>
        </h1>
      </nav>
    </div>
  )
}

export default Header
