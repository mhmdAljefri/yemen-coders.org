import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  transition: all 400ms ease-in-out;
  width: ${({ isNavOpen }) => isNavOpen && `250px`};
  position: ${({ isNavOpen }) => (isNavOpen ? `fixed` : "relative")};
  margin: 0;
  top: ${({ isNavOpen }) => isNavOpen && `0`};
  bottom: ${({ isNavOpen }) => isNavOpen && `0`};
  right: ${({ isNavOpen }) => isNavOpen && `0`};
  flex-direction: ${({ isNavOpen }) => isNavOpen && `column`};
  justify-content: ${({ isNavOpen }) => isNavOpen && `center`};
  align-items: ${({ isNavOpen }) => isNavOpen && `center`};
  background-color: ${({ isNavOpen }) => isNavOpen && `#fff`};
`

const StyledLink = styled(Link)`
  padding: 20px 10px;
  margin: 0 5px;
  text-decoration: none;
  color: #200202;
`

const StyledMenu = styled.div`
  display: flex;
  position: ${({ toggled }) => toggled && "relative"};
  z-index: ${({ toggled }) => toggled && "1"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 40px;
`
const Minus = styled.span`
  display: ${({ center }) => (center ? "none" : "block")};
  width: 30px;
  height: 4px;
  position: ${({ toggled }) => toggled && "absolute"};
  /* border: 1px solid #fff; */
  box-sizing: border-box;
  transition: all 400ms ease-in-out;
  background-color: #101010;
  right: 0;
  margin: 2px auto;
  transform: ${props =>
    props.bottom ? "rotate(45deg)" : props.top ? "rotate(135deg)" : null};
`
const NavList = ({ isNavOpen }) => (
  <StyledUl isNavOpen={isNavOpen}>
    <li>
      <StyledLink to="/">Blog</StyledLink>
    </li>
    <li>
      <StyledLink to="/events">Events</StyledLink>
    </li>
    <li>
      <StyledLink to="/sponsors">Sponsers</StyledLink>
    </li>
    <li>
      <StyledLink to="/">Coaches</StyledLink>
    </li>
    <li>
      <StyledLink to="/">Communties</StyledLink>
    </li>
    <li>
      <StyledLink to="/">Donate</StyledLink>
    </li>
    <li>
      <StyledLink to="/">Jobs</StyledLink>
    </li>
  </StyledUl>
)
const Nav = () => {
  const [isBigScreen, setBigScreen] = useState(false)
  const [isNavOpen, setNavOpen] = useState(false)
  useEffect(() => {
    if (window) {
      handleScreenSizeing()

      window.addEventListener("resize", handleScreenSizeing)
      return () => {
        window.removeEventListener("resize", handleScreenSizeing)
      }
    }
  })

  const handleScreenSizeing = () => setBigScreen(!!(window.innerWidth > 767))
  const toggleNav = () => setNavOpen(!isNavOpen)
  return isBigScreen ? (
    <nav>
      <NavList />
    </nav>
  ) : (
    <nav>
      <StyledMenu toggled={isNavOpen} onClick={toggleNav}>
        <Minus toggled={isNavOpen} top={isNavOpen} />
        <Minus toggled={isNavOpen} center={isNavOpen} />
        <Minus toggled={isNavOpen} bottom={isNavOpen} />
      </StyledMenu>
      {isNavOpen && <NavList isNavOpen={isNavOpen} />}
    </nav>
  )
}

export default Nav
