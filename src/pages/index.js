import React from "react"
import { graphql } from "gatsby"
// import { Link, graphql } from "gatsby"
// import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import { typography, headerSub } from "../utils/typography"

export default function Index({ data }) {
  console.log(typography)
  return (
    <Layout>
      <main>
        <h1 className="landing-header">{data.site.siteMetadata.title}</h1>
        <h2 style={{ fontFamily: `${headerSub}` }}>testing</h2>
        <p>testing</p>
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
