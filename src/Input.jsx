/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
   grid-area: ${(props) => props.grid}
`;
const FormInput = styled.input`
width: 100%;
height: 100%;
background-color: #f2f2f2;
border: 1px solid ${(props) => (props.errorBorder ? '#bc3908' : '#f2f2f2')};
border-radius: 5px;
`;

const ErrorMessage = styled.p`
font-size: 11px;
color: #bc3908;
`;

export default function Input(props) {
  const {
    type, grid, placeholder, value, onChange, name, isErrorShown, error, onFocus, onBlur,
  } = props;
  return (
    <InputContainer grid={grid}>
      <FormInput
        onFocus={onFocus}
        onBlur={onBlur}
        errorBorder={isErrorShown}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      { isErrorShown && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
}
