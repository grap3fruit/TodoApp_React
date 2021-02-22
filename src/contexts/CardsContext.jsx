import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { GET_CARDS, ADD_CARD, UPDATE_CARD, DELETE_CARD } from '../utils/constants';

const cardsReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CARDS:
      return { cards: [...state.cards, ...payload] };
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, payload],
      };
    default:
      return state;
  }
};

const CardsStateContext = React.createContext();
const CardsDispatchContext = React.createContext();

const initialState = {
  cards: [],
};

export const CardsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardsReducer, initialState);

  return (
    <CardsStateContext.Provider value={state}>
      <CardsDispatchContext.Provider value={dispatch}>{children}</CardsDispatchContext.Provider>
    </CardsStateContext.Provider>
  );
};

CardsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useCardsState = () => useContext(CardsStateContext);
export const useCardsDispatch = () => useContext(CardsDispatchContext);
