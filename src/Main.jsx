import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Column from './Column';
import { fetchData } from './utils/api';

const StyledMain = styled.main`
  display: flex;
`;

const Main = () => {
  const [columns, setColumn] = useState();

  useEffect(() => {
    fetchData({ url: '/columns', method: 'GET', setState: setColumn });
  }, []);

  return (
    <StyledMain>
      {columns &&
        columns.map((column) => (
          <Column key={column.id} columnId={column.id} title={column.title} />
        ))}
    </StyledMain>
  );
};

export default Main;
