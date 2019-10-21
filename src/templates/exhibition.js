import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import typography from "../utils/typography"

import ExhibitionNav from "../components/ExhibitionNav"
import ExhibitionPageTracker from "../components/ExhibitionPageTracker"

const ExhibitionTemplate = ({ data, pageContext }) => {
  const exhibitionPageHeader = typography.options.headerFontFamily[2]
  const exhibition = data.markdownRemark
  const images = exhibition.frontmatter.exhibition_images

  let displayExhibitionInfo = false

  const displayInfoToggle = () => {
    displayExhibitionInfo = false
  }

  const ExhibitionInfoContainer = styled.div`
  .main-header {
    color: #ff5912;
    font-family: ${exhibitionPageHeader};
    font-size: 50px;
  }
  .images-selector {
    font-family: ${exhibitionPageHeader};
    font-size: 120px;
    -webkit-text-fill-color: #d9d8d8;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #2f2c5d;
  }
    .images-selector:hover {
      cursor: pointer;
      -webkit-text-stroke-color: #ff5912;
    }
    h3{
      color: #8493bf;
    }
    display: ${displayExhibitionInfo === true ? "flex" : "none"}
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
    width: 40%;
  `
  const ExhibitionImagesContainer = styled.div`
    div {
      align-items: center;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      margin: 0 auto 2rem auto;
      width: 80%;
    }
    p {
      font-style: italic;
      font-weight: 600;
      text-align: center;
    }
    img {
      max-width: 600px;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-bottom: 10%;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100vw;
  `
  return (
    <div>
      <ExhibitionNav pageContext={pageContext} />
      <ExhibitionPageTracker pageContext={pageContext} />
      <ExhibitionInfoContainer>
        <header>
          <h1 className="main-header">{exhibition.frontmatter.title}</h1>
        </header>
        <nav>
          <h3>
            {exhibition.frontmatter.venue} {exhibition.frontmatter.year}
          </h3>
          <h1 className="images-selector" onClick={displayInfoToggle()}>
            images
          </h1>
        </nav>
      </ExhibitionInfoContainer>
      <ExhibitionImagesContainer>
        {images.map(entry => {
          return (
            <div key={entry.id}>
              <img src={entry.image} alt={entry.image_alt} />
              <p>{entry.artwork_title}</p>
            </div>
          )
        })}
      </ExhibitionImagesContainer>
    </div>
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
export default ExhibitionTemplate
