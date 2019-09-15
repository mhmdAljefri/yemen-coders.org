import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log({ data })
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  console.log({ allMarkdownRemark })
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query TemplateBlogMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 500)
      frontmatter {
        title
        author {
          frontmatter {
            name
            url
          }
        }
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(
      limit: 10
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
