import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Nav from "./nav"
import Wrapper from "./wrapper"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: #fff;
  height: 60px;
  padding: 0;
  line-height: 60px;
  box-shadow: ${({ scrolled }) =>
    scrolled &&
    "0 2px 4px -1px rgba(0,0,0,.06), 0 4px 5px 0 rgba(0,0,0,.06), 0 1px 10px 0 rgba(0,0,0,.08)"};
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200;
  display: flex;
  justify-content: space-between;
`

const Header = () => {
  const [isScrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    if (window) window.addEventListener("scroll", handleScrolling)
    return () => {
      if (window) window.removeEventListener("scroll", handleScrolling)
    }
  })

  const handleScrolling = () => setScrolled(!!window.pageYOffset)
  return (
    <StyledHeader scrolled={isScrolled}>
      <Wrapper>
        <StyledWrapper>
          <StyledLink to="/">
            <h1
              className="gradient-color"
              style={{ lineHeight: "60px", margin: 0, fontSize: 20 }}
            >
              Yemenies &lt;coders&gt;
            </h1>
          </StyledLink>
          <Nav />
        </StyledWrapper>
      </Wrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
