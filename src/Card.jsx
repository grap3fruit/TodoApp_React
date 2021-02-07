import React, { useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { fetchData } from './utils/api';

const StyledCard = styled.section`
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #f6f8fa;
  }
`;

const Card = ({ id, content, deleteBtnClickHandler }) => {
  const cardEl = useRef(null);

  const cardEditClickHandler = () => {
    console.log('hi', /\d+/.exec(cardEl.current.id)[0], Number(/\d+/.exec(cardEl.current.id)[0]));
  };

  return (
    <StyledCard id={`card${id}`} ref={cardEl} onClick={cardEditClickHandler}>
      <p>{content}</p>
      <button type="button" onClick={() => deleteBtnClickHandler(id)}>
        X
      </button>
    </StyledCard>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  deleteBtnClickHandler: PropTypes.func.isRequired,
};

export default Card;
