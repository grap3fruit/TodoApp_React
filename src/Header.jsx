import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  background-color: pink;
`;

const Header = () => (
  <StyledHeader>
    <div>TODO 서비스</div>
    <div>Menu</div>
  </StyledHeader>
);

export default Header;
