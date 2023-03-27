/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const FormButton = styled.button`
   grid-area: ${(props) => props.grid};
   border: 1px solid #9cc5a1;
   background-color: #9cc5a1;
   border-radius: 5px;
   text-transform: uppercase;
   color: white;
   cursor: pointer;
   box-shadow: 3px 3px 5px #ced4da;
`;

export default function Button(props) {
  const { grid } = props;
  return (
    <FormButton grid={grid}>Сохранить</FormButton>
  );
}
