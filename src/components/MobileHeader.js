import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const MobileHeader = () => {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="18"
          viewBox="0 0 64 18"
        >
          <g
            id="BurgerMenu"
            data-name="Burger Menu"
            transform="translate(-27 -88)"
            opacity="0.6"
          >
            <path
              id="Rectangle_1"
              data-name="Rectangle 1"
              d="M0,0H62a2,2,0,0,1,2,2V2a2,2,0,0,1-2,2H0A0,0,0,0,1,0,4V0A0,0,0,0,1,0,0Z"
              transform="translate(27 88)"
              fill="#fff"
            />
            <path
              id="Rectangle_2"
              data-name="Rectangle 2"
              d="M0,0H62a2,2,0,0,1,2,2V2a2,2,0,0,1-2,2H0A0,0,0,0,1,0,4V0A0,0,0,0,1,0,0Z"
              transform="translate(27 95)"
              fill="#fff"
            />
            <path
              id="Rectangle_3"
              data-name="Rectangle 3"
              d="M0,0H49a2,2,0,0,1,2,2V2a2,2,0,0,1-2,2H0A0,0,0,0,1,0,4V0A0,0,0,0,1,0,0Z"
              transform="translate(27 102)"
              fill="#fff"
            />
          </g>
        </svg>
      </nav>
      <nav></nav>
    </div>
  )
}

export default MobileHeader
