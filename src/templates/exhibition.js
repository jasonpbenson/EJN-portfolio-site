import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

export default function ExhibitionTemplate({ data, pageContext }) {
  console.log("context: ", pageContext)
  const exhibition = data.markdownRemark
  const images = exhibition.frontmatter.exhibition_images
  console.log(exhibition)
  return (
    <Layout>
      <section>
        <header>
          <h1>{exhibition.frontmatter.title}</h1>
        </header>
        <nav>
          <h2>
            <a href="#images">IMAGES</a>
          </h2>
        </nav>
        <aside>{exhibition.frontmatter.year}</aside>
        <aside>{exhibition.frontmatter.venue}</aside>
      </section>
      <section id="images" style={{ marginTop: "50%", overflow: "scroll" }}>
        <div>
          {images.map(entry => {
            return (
              <div key={entry.id}>
                <img
                  style={{ maxWidth: "50%", marginTop: "10%" }}
                  src={entry.image}
                  alt={entry.image_alt}
                />
                <p>{entry.artwork_title}</p>
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
      fileAbsolutePath: { regex: "/exhibitions/" }
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
