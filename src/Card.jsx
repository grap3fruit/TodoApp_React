import React from 'react';
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

const Card = ({ id, content }) => {
  const deleteBtnClickHandler = () => {
    fetchData({ url: `/card/${id}`, method: 'DELETE' });
  };

  const cardEditClickHandler = () => {};

  return (
    <StyledCard onClick={cardEditClickHandler}>
      <p>{content}</p>
      <button type="button" onClick={deleteBtnClickHandler}>
        X
      </button>
    </StyledCard>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
