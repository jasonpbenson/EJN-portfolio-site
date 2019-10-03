import React from "react"
import { graphql } from "gatsby"
// import { Link, graphql } from "gatsby"
// import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

export default function Index({ data }) {
  return (
    <Layout>
      <main>
        <h1 className="landing-header">{data.site.siteMetadata.title}</h1>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
