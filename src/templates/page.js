import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const PageTemplate = ({ data, pageContext }) => {
  console.log("'pages' context: ", pageContext)
  const { markdownRemark: page } = data

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: page.html }}></div>
    </Layout>
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
