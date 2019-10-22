import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import typography from "../utils/typography"

import infoPageImage from "../assets/images/info-image.png"

const PageTemplate = ({ data }) => {
  const { markdownRemark: page } = data
  const sectionHeadersFont = typography.options.headerFontFamily[2]

  const PageStyles = styled.div`
    .contact {
      font-style: italic;
      font-weight: bold;
      position: fixed;
      text-align: center;
      margin-left: 5%;
      margin-top: 14%;
      width: 20%;
    }
    .cv {
      height: 100vh;
      overflow-y: scroll;
      padding: 14% 20% 16% 40%;
      text-align: left;
      width: 100%;
    }
    .cv ::-webkit-scrollbar {
      display: none;
    }
    .cv a {
      color: #8493bf;
      text-decoration: none;
    }
    .cva: hover {
      color: #ff5912;
    }
    .cv h3 {
      color: #ff5912;
      font-family: ${sectionHeadersFont};
    }
    color: #2f2c5d;
    display: flex;
    position: fixed;
    width: 100vw;
  `

  return (
    <>
      <PageStyles>
        <div className="contact">
          <img src={infoPageImage} alt="artwork detail" />
          <p>erinjanenelson@gmail.com</p>
        </div>
        <div
          className="cv"
          dangerouslySetInnerHTML={{ __html: page.html }}
        ></div>
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
