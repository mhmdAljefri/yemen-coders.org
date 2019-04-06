import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 1rem;
`

const Wrapper = ({ children, ...props }) => (
  <StyledWrapper {...props}>{children}</StyledWrapper>
);

export default Wrapper;
