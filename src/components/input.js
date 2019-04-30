import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  box-sizing: border-box;
  border: 1px solid #e9e9e9;
  padding: 5px 10px;
  bottom: 1px;
  right: 1px;
  left: 1px;
  width: 100%;
  height: 40px;
`;

const StyledDiv = styled.div`
  position: relative;
  height: 50px;
  margin-bottom: 10px;
`;

const StyledLabel = styled.label`
  margin: ${({isFocused}) => isFocused ? '-10px 5px' : '10px'};
  font-size: ${({isFocused}) => isFocused ? '14px' : '16px'};
  color: ${({isFocused}) => isFocused || '#999'};
  transition: all 200ms ease-in-out;
  position: absolute;
  background: #fff;
  padding: 0 5px;
`

const Input = ({
  placeholder,
  name,
  ...props,
}) => {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleSetFocused = () => setFocused(true);
  const handleSetBulr = () => setFocused(false);

  const handleChange = ({target}) => setValue(target.value);

  return (
    <StyledDiv>
      <StyledLabel isFocused={focused || value}>{placeholder}</StyledLabel>
      <StyledInput
        {...props}
        isFocused={focused || value}
        name={name}
        onChange={handleChange}
        value={value}
        onFocus={handleSetFocused}
        onBlur={handleSetBulr}
      />
    </StyledDiv>
  );
};

export default Input;
