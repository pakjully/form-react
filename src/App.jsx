import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Container = styled.div`
   max-width: 550px;
   margin: 100px auto;
`;

const Heading = styled.p`
    font-size: 25px;
    margin-bottom: 25px;
 `;

function App() {
  return (
    <Container>
      <Heading>Информация о сотруднике</Heading>
      <Form />
    </Container>

  );
}

export default App;
