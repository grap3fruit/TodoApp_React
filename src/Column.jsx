import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Card from './Card';
import InputBox from './InputBox';
import { fetchData } from './utils/api';

const StyledColumn = styled.section`
  margin-right: 2rem;
  width: 15rem;
`;

const StyledColumnHeader = styled.div`
  display: flex;
  background-color: #dbdbdb;
  justify-content: space-between;
`;

const StyledColumnHeaderInfo = styled.div`
  display: flex;
`;

const StyledColumnTitle = styled.p`
  margin-left: 1rem;
`;

const StyledColumnHeaderAction = styled.div`
  display: flex;
`;

const StyledCardList = styled.div`
  background-color: #f3eaea;
`;

const Column = ({ columnId, title }) => {
  const [cards, setCards] = useState();
  const [isInputBoxOpened, setIsInputBoxOpened] = useState(false);

  useEffect(() => {
    fetchData({ url: `/columns/${columnId}/cards`, method: 'GET', setState: setCards });
  }, [columnId]);

  const inputBoxDisplayHandler = () => {
    if (isInputBoxOpened) {
      setIsInputBoxOpened(false);
      return;
    }
    setIsInputBoxOpened(true);
  };

  return (
    <StyledColumn>
      <StyledColumnHeader>
        <StyledColumnHeaderInfo>
          <p>{cards && cards.length}</p>
          <StyledColumnTitle>{title}</StyledColumnTitle>
        </StyledColumnHeaderInfo>
        <StyledColumnHeaderAction>
          <button type="button" onClick={inputBoxDisplayHandler}>
            +
          </button>
          <button type="button">X</button>
        </StyledColumnHeaderAction>
      </StyledColumnHeader>
      <InputBox isInputBoxOpened={isInputBoxOpened} columnId={columnId} />
      <StyledCardList>
        {cards && cards.map((card) => <Card key={card.id} id={card.id} content={card.memo} />)}
      </StyledCardList>
    </StyledColumn>
  );
};

Column.propTypes = {
  columnId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Column;