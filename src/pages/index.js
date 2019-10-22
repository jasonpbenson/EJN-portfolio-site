import React from "react"
import { graphql } from "gatsby"

import LandingImage from "../components/LandingImage"

const Index = ({ data }) => {
  const imageSet = data.allFile
  console.log(imageSet)
  return (
    <main>
      <LandingImage imageSet={imageSet} />
    </main>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { relativePath: { regex: "/web-landing-images/" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          id
        }
      }
    }
  }
`

export default Index
