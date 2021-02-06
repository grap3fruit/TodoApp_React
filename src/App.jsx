import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Main from './Main';

const StyledApp = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const App = () => (
  <StyledApp className="App">
    <Header />
    <Main />
  </StyledApp>
);

export default App;
