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
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100vw;
    @media screen and (max-width: 679px) {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
    }
  `

  const ExhibitionInfoContainer = styled.div`
    align-items: center;
    bottom: 10%;
    display: flex;
    flex-flow: row;
    height: fit-content;
    justify-content: center;
    position: fixed;
    right: 9vw;
    text-align: right;
    width: 30%;
    word-break: break-all;
    z-index: 200;
    h1 {
      color: #d9d8d8;
      font-family: ${exhibitionPageHeader};
      font-size: 5vw;
      margin-bottom: 0;
      text-transform: uppercase;
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: #ff5912;
    }
    h2 {
      color: #8493bf;
      font-size: 1.7vw;
      margin-bottom: 0;
      overflow-y: scroll;
    }
    @media screen and (max-width: 899px) {
      bottom: 8%;
      right: 3vw;
      h1 {
        font-size: 5vw;
      }
      h2 {
        font-size: 1.7vw;
      }
    }
    @media screen and (max-width: 679px) {
      top: 30vw;
      text-align: center;
      right: 0;
      width: 100vw;
      z-index: 1;
      h1 {
        color: #d9d8d8;
        font-size: 7vw;
      }
      h2 {
        font-size: 4.5vw;
      }
    }
    @media screen and (max-width: 414px) {
      top: 18%;
    }
  `
  const ExhibitionImagesContainer = styled.div`
    background-color: #d9d8d8;
    height: 100%;
    overflow-y: scroll;
    position: fixed;
    padding-top: 5%;
    width: 100%;
    div {
      align-items: center;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      margin: 2% 0 2% 4%;
      width: 55%;
    }
    p {
      align-self: flex-start;
      color: #d9d8d8;
      background: #2f2c5d;
      font-size: 1.25vw;
      font-style: italic;
      padding: 5px 10px;
      text-align: left;
    }
    img {
      margin-bottom: 0.5rem;
      max-width: 100%;
      z-index: 200;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    @media screen and (max-width: 899px) {
      padding-top: 7%;
      div {
        margin-left: 10%;
        width: 55%;
      }
      p {
        font-size: 1.6vw;
      }
    }
    @media screen and (max-width: 679px) {
      div {
        background-color: #d9d8d8;
        margin: 0 auto;
        width: 90%;
      }
      p {
        font-size: 2vw;
      }
      background-color: #d9d8d800;
      left: 0;
      padding-bottom: 10%;
      padding-top: 50%;
      z-index: 100;
    }
    @media screen and (max-width: 414px) {
      p {
        font-size: 11pt;
      }
      padding-bottom: 30%;
      padding-top: 50%;
    }
    @media screen and (max-width: 414px) and (min-height: 800px) {
      padding-top: 70%;
    }
    @media screen and (min-height: 1024px) {
      padding-top: 12%;
    }
  `
  return (
    <MainContainer>
      <ExhibitionNav pageContext={pageContext} />
      <ExhibitionPageTracker pageContext={pageContext} />
      <ExhibitionInfoContainer>
        <header>
          <h1>{exhibition.frontmatter.title}</h1>
          <h2>
            {exhibition.frontmatter.venue} {exhibition.frontmatter.year}
          </h2>
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
