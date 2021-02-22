import React, { useRef, useContext } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledCard = styled.section`
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #f6f8fa;
  }
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

const Card = ({ id, content, deleteBtnClickHandler, cardEditClickHandler }) => {
  const cardEl = useRef(null);

  // if (isEditing) {
  //   return (
  //     <StyledCard id={`card${id}`} ref={cardEl} onClick={cardEditClickHandler}>
  //       <p>{content}</p>
  //       <StyledModal>
  //         <p>모달</p>
  //       </StyledModal>
  //       <button type="button" onClick={() => deleteBtnClickHandler(id)}>
  //         X
  //       </button>
  //     </StyledCard>
  //   );
  // }

  return (
    <StyledCard id={`card${id}`} ref={cardEl} onClick={cardEditClickHandler(cardEl)}>
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
  cardEditClickHandler: PropTypes.func.isRequired,
};

export default Card;
