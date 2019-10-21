import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const PageTemplate = ({ data, pageContext }) => {
  // console.log("'pages' context: ", pageContext)
  const { markdownRemark: page } = data

  const PageStyles = styled.div`
    text-align: right;
  `

  return (
    <>
      <PageStyles>
        <div dangerouslySetInnerHTML={{ __html: page.html }}></div>
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
