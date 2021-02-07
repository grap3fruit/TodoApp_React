import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledInputBox = styled.section`
  display: ${(props) => (props.isInputBoxOpened ? 'block' : 'none')};
`;

const InputBox = ({
  isInputBoxOpened,
  columnId,
  addNewCardClickHandler,
  inputBoxDisplayHandler,
}) => {
  const [textValue, setTextValue] = useState('');

  const textAreaChangeHandler = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <StyledInputBox isInputBoxOpened={isInputBoxOpened}>
      <textarea onChange={textAreaChangeHandler} />
      <div>
        <button type="button" onClick={() => addNewCardClickHandler(textValue)}>
          Add
        </button>
        <button type="button" onClick={inputBoxDisplayHandler}>
          Cancel
        </button>
      </div>
    </StyledInputBox>
  );
};

InputBox.propTypes = {
  isInputBoxOpened: PropTypes.bool.isRequired,
  columnId: PropTypes.number.isRequired,
  addNewCardClickHandler: PropTypes.func.isRequired,
  inputBoxDisplayHandler: PropTypes.func.isRequired,
};

export default InputBox;
