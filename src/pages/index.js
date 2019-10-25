import React from "react"
import { graphql } from "gatsby"

import LandingImage from "../components/LandingImage"
import MobileLandingImage from "../components/MobileLandingImage"

const Index = ({ data }) => {
  const imageSet = data.allFile
  return (
    <main>
      <LandingImage imageSet={imageSet} />
      <MobileLandingImage />
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
