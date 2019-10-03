import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default function ExhibitionTemplate({ data, pageContext }) {
  console.log(pageContext)
  const exhibition = data.markdownRemark
  const images = exhibition.frontmatter.exhibition_images
  console.log(exhibition)
  return (
    <Layout>
      <section className="exhibition-info">
        <header>
          <h1>{exhibition.frontmatter.title}</h1>
        </header>
        <nav>
          <h2>IMAGES</h2>
        </nav>
        <aside>{exhibition.frontmatter.year}</aside>
      </section>
      <section className="exhibition-images">
        <div className="exhibition-images-container">
          {images.map(entry => {
            return (
              <div key={entry.id}>
                <p>{entry.artwork_title}</p>
                <img src={entry.image} alt={entry.image_alt} />
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
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
