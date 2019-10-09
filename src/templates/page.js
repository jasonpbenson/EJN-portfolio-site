import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default function PageTemplate({ data, pageContext }) {
  console.log("context: ", pageContext)
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
