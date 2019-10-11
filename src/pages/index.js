import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import LandingImage from "../components/LandingImage"

const Index = ({ data }) => {
  const imageSet = data.allFile
  return (
    <Layout>
      <main>
        <LandingImage imageSet={imageSet} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { absolutePath: { regex: "/web-landing-images/" } }) {
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
