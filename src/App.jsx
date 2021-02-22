import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Main from './Main';
import { CardsProvider } from './contexts/CardsContext';

const StyledApp = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const App = () => (
  <CardsProvider>
    <StyledApp className="App">
      <Header />
      <Main />
    </StyledApp>
  </CardsProvider>
);

export default App;
