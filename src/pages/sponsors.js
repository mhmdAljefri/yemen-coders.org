import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Img from "gatsby-image"

const Sponsors = ({ data }) => (
  <Layout>
    <SEO title="Sponsors" />
    <Wrapper style={{ paddingBottom: 50, paddingTop: 50 }}>
      <h1>Sponsors</h1>
      <p>
        Without our sponsors running codebar would be impossible. They provide
        us with space, food and drinks, internet, and they also help us cover
        our running costs.
      </p>
      <p>
        Thank you for sharing our dream of creating a more welcoming, equal and
        diverse tech industry.
      </p>
      <p>
        If you are interested in becoming a host please do get in{" "}
        <Link to="/#contatct-us">touch with us</Link> .
      </p>
    </Wrapper>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <div key={index}>
        <Wrapper>
          <h2>{node.frontmatter.title}</h2>
          <div>
            {node.frontmatter.sponsor.map(({ frontmatter }, index) => (
              <div key={index}>
                {console.log({ frontmatter })}
                <p>{frontmatter.name}</p>
                <img src={frontmatter.image} />
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query SponsorsPageQueryByPath {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(sponsors)/*.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            sponsor {
              frontmatter {
                name
                image
              }
            }
          }
        }
      }
    }
  }
`

Sponsors.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          html: React.node,
          frontmatter: PropTypes.shape().isRequired,
        }),
      })
    ),
  }),
}

export default Sponsors
