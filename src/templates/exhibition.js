import React from "react"
import { graphql } from "gatsby"

export default function ExhibitionTemplate({ data, pageContext }) {
  console.log(pageContext)
  const exhibition = data.markdownRemark
  console.log(exhibition)
  return (
    <div className="headers-container">
      <div className="title-container">
        <h1>{exhibition.frontmatter.title}</h1>
      </div>
      <h1>IMAGES</h1>
      <h2></h2>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/exhibition-pages-data/" }
      fields: { slug: { eq: $slug } }
    ) {
      frontmatter {
        exhibition_images {
          artwork_title
          id
          image
          image_alt
        }
        id
        title
        venue
        year
      }
    }
  }
`
