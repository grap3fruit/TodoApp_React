import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Card from './Card';
import InputBox from './InputBox';
import { fetchData } from './utils/api';
import { GET_CARDS, ADD_CARD } from './utils/constants';
import { useCardsState, useCardsDispatch } from './contexts/CardsContext';

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

const StyledModal = styled.div`
  background-color: #d6fcfd;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

const Column = ({ columnId, title }) => {
  const { cards } = useCardsState();
  const dispatch = useCardsDispatch();

  const [isInputBoxOpened, setIsInputBoxOpened] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    (async () => {
      const results = await fetchData({ url: `/columns/${columnId}/cards`, method: 'GET' });
      dispatch({ type: GET_CARDS, payload: results });
    })();
  }, [columnId, dispatch]);

  const inputBoxDisplayHandler = () => {
    if (isInputBoxOpened) {
      setIsInputBoxOpened(false);
      return;
    }
    setIsInputBoxOpened(true);
  };

  const deleteBtnClickHandler = async (cardId) => {
    // await fetchData({ url: `/card/${cardId}`, method: 'DELETE' });
    // setCards(cards.filter((card) => card.id !== cardId));
  };

  const addNewCardClickHandler = async (textValue) => {
    const data = {
      columnId,
      memo: textValue,
      previousCardId: -1,
      userName: 'soonwon',
    };

    dispatch({ type: ADD_CARD, payload: { id: 999, ...data } });
  };

  const cardEditClickHandler = (cardEl) => {
    // console.log('hi', /\d+/.exec(cardEl.current.id)[0], Number(/\d+/.exec(cardEl.current.id)[0]));
    // isEditing ? setIsEditing(false) : setIsEditing(true);
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
      <InputBox
        isInputBoxOpened={isInputBoxOpened}
        columnId={columnId}
        addNewCardClickHandler={addNewCardClickHandler}
        inputBoxDisplayHandler={inputBoxDisplayHandler}
      />
      <StyledCardList>
        {cards &&
          cards
            .filter((card) => card.columnId === columnId)
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                content={card.memo}
                deleteBtnClickHandler={deleteBtnClickHandler}
                cardEditClickHandler={cardEditClickHandler}
              />
            ))}
      </StyledCardList>
    </StyledColumn>
  );
};

Column.propTypes = {
  columnId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Column;
