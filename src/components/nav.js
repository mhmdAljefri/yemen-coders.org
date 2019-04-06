import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  @media screen and (max-width: 767px){
    display: none;
  }
`

const StyledLink = styled(Link)`
  padding: 20px 10px;
  margin: 0 5px;
  text-decoration: none;
  color: #200202;
`

const Nav = () => (
  <nav>
    <StyledUl>
      <li><StyledLink to="/">Events</StyledLink></li>
      <li><StyledLink to="/">Sponsers</StyledLink></li>
      <li><StyledLink to="/">Coaches</StyledLink></li>
      <li><StyledLink to="/">Communties</StyledLink></li>
      <li><StyledLink to="/">Donate</StyledLink></li>
      <li><StyledLink to="/">Jobs</StyledLink></li>
    </StyledUl>
  </nav>
);

export default Nav;