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

  const MainContainer = styled.div`
    display: flex;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100vw;
  `

  const ExhibitionInfoContainer = styled.div`
    .main-header {
      color: #ff5912;
      font-family: ${exhibitionPageHeader};
      font-size: 50px;
    }
    h3 {
      color: #8493bf;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 5%;
    margin: 0 auto;
    position: fixed;
    text-align: center;
    text-transform: uppercase;
    top: 30%;
    width: 20%;
  `
  const ExhibitionImagesContainer = styled.div`
    div {
      align-items: center;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      margin: 5% auto;
      width: 50%;
    }
    p {
      font-style: italic;
      font-weight: 600;
      text-align: left;
      width: 600;
    }
    img {
      max-width: 600px;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    align-content: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    padding: 4% 0 4% 10%;
    position: fixed;
    width: 100%;
  `
  return (
    <MainContainer>
      <ExhibitionNav pageContext={pageContext} />
      <ExhibitionPageTracker pageContext={pageContext} />
      <ExhibitionInfoContainer>
        <header>
          <h1 className="main-header">{exhibition.frontmatter.title}</h1>
          <h3>
            {exhibition.frontmatter.venue} {exhibition.frontmatter.year}
          </h3>
        </header>
      </ExhibitionInfoContainer>
      <ExhibitionImagesContainer id="exhibition-images">
        {images.map(entry => {
          return (
            <div key={entry.id}>
              <img src={entry.image} alt={entry.image_alt} />
              <p>{entry.artwork_title}</p>
            </div>
          )
        })}
      </ExhibitionImagesContainer>
    </MainContainer>
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
