import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import ExhibitionNav from "../components/ExhibitionNav"

export default () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <header className="title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </header>
        <nav>
          <ul className="header-menu">
            <li>
              <Link to="/information/">INFORMATION</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ExhibitionNav />
        </nav>
      </div>
    )}
  />
)
