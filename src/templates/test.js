// import React from "react"
// import { Helmet } from "react-helmet"
// import { graphql } from "gatsby"

// export default function TestTemplate({ data }) {
//   const { markdownRemark: test } = data
//   console.log(data)
//   return (
//     <div>
//       <Helmet title={`EJN – ${test.frontmatter.title}`} />
//       <div>
//         <h1>{test.frontmatter.title}</h1>
//         <h3>{test.frontmatter.date}</h3>
//         <div dangerouslySetInnerHTML={{ __html: test.html }}></div>
//       </div>
//     </div>
//   )
// }

// export const testQuery = graphql`
//   query TestPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `
