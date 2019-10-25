import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import typography from "../utils/typography"

import infoPageImage from "../assets/images/info-page-image.png"

const PageTemplate = ({ data }) => {
  const { markdownRemark: page } = data
  const sectionHeadersFont = typography.options.headerFontFamily[2]

  const PageStyles = styled.div`
    color: #2f2c5d;
    position: fixed;
    width: 100vw;
    @media screen and (max-width: 679px) {
      top: 10%;
    }
  `

  const ContactStyles = styled.div`
    img {
      max-width: 200px;
      width: 80%;
    }
    font-style: italic;
    font-weight: bold;
    position: fixed;
    text-align: center;
    margin-left: 5%;
    margin-top: 14%;
    width: fit-content;
    @media screen and (max-width: 679px) {
      display: none;
    }
  `

  const CvStyles = styled.div`
    height: 100vh;
    overflow-y: scroll;
    padding: 14% 15% 16% 40%;
    text-align: left;
    width: 100%;
    ::-webkit-scrollbar {
      display: none;
    }
    a {
      color: #8493bf;
      text-decoration: none;
    }
    a: hover {
      color: #ff5912;
    }
    h3 {
      color: #ff5912;
      font-family: ${sectionHeadersFont};
    }
    ul {
      list-style-type: none;
    }
    @media screen and (max-width: 899px) {
      padding: 15% 10% 16% 45%;
    }
    @media screen and (max-width: 679px) {
      padding: 15% 5% 20% 5%;
    }
    @media screen and (max-width: 414px) {
      padding: 30% 8%;
    }
  `

  return (
    <>
      <PageStyles>
        <ContactStyles>
          <img src={infoPageImage} alt="artwork detail" />
          <p>erinjanenelson@gmail.com</p>
        </ContactStyles>
        <CvStyles dangerouslySetInnerHTML={{ __html: page.html }}></CvStyles>
      </PageStyles>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/page-data/" }
      fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default PageTemplate
