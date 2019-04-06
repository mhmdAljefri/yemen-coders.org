/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GitHub, Slack, Facebook, Twitter } from "react-feather";
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"
import Wrapper from "./wrapper";

const StyledFooter = styled.footer`
  padding: 50px 0;
  background-color: #101010;
  color: #ccc;
`
const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledLink = styled.a`
  padding: 10px;
  display: inline-block;
  margin: 0 5px;
  color: #999;
  :hover {
    color: #fff;
  }
`
const Dark = styled.span`
  color: #999;
  display: inline-block;
  padding: 10px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <main>{children}</main>
          <StyledFooter>
            <Wrapper>
              <StyledFlexWrapper>
                <div>
                  <Dark>
                    © {new Date().getFullYear()} Yemeines coders
                  </Dark>
                </div>
                <div>
                  <StyledLink name="facebook" href="https://facebook.com"><Facebook /></StyledLink>
                  <StyledLink name="facebook" href="https://facebook.com"><GitHub /></StyledLink>
                  <StyledLink name="facebook" href="https://facebook.com"><Twitter /></StyledLink>
                  <StyledLink name="facebook" href="https://facebook.com"><Slack /></StyledLink>
                </div>
              </StyledFlexWrapper>
            </Wrapper>
          </StyledFooter>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
