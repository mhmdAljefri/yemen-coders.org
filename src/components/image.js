import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ style, src = "OAYTJO0.jpg" }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: ${src} }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              src
            }
          }
        }
      }
    `}
    render={data => (
      <Img style={style} fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
export default Image
