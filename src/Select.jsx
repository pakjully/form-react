/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const FormSelect = styled.select`
    grid-area: ${(props) => props.grid};
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
`;

export default function Select(props) {
  const {
    grid, value, name, onChange,
  } = props;
  return (
    <FormSelect
      grid={grid}
      value={value}
      name={name}
      onChange={onChange}
    >
      <option value=" Пол" hidden>Пол</option>
      <option value="Мужской">Мужской</option>
      <option value="Женский">Женский</option>
    </FormSelect>
  );
}
