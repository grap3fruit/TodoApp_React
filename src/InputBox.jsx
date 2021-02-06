import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { fetchData } from './utils/api';

const StyledInputBox = styled.section`
  display: ${(props) => (props.isInputBoxOpened ? 'block' : 'none')};
`;

const InputBox = ({ isInputBoxOpened, columnId }) => {
  const [textValue, setTextValue] = useState('');

  const textAreaChangeHandler = (e) => {
    setTextValue(e.target.value);
  };

  const addNewCardClickHandler = () => {
    const data = {
      columnId,
      memo: textValue,
    };
    fetchData({ url: '/card', method: 'POST', data });
  };

  return (
    <StyledInputBox isInputBoxOpened={isInputBoxOpened}>
      <textarea onChange={textAreaChangeHandler} />
      <div>
        <button type="button" onClick={addNewCardClickHandler}>
          Add
        </button>
        <button type="button">Cancel</button>
      </div>
    </StyledInputBox>
  );
};

InputBox.propTypes = {
  isInputBoxOpened: PropTypes.bool.isRequired,
  columnId: PropTypes.number.isRequired,
};

export default InputBox;
