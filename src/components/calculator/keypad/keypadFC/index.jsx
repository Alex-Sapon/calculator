import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { KeypadContainer, Key } from '@components/calculator/keypad/styles';
import { operations } from '@constants/operations';
import { keypadHandler } from '@helpers/keypadHandler';
import { selectValue, selectOperation, selectExpression, selectTempResult } from '@store/selectors';

export const Keypad = () => {
  const dispatch = useDispatch();

  const expression = useSelector(selectExpression);
  const value = useSelector(selectValue);
  const operation = useSelector(selectOperation);
  const tempResult = useSelector(selectTempResult);

  const handleClick = event => {
    keypadHandler(event, value, expression, operation, tempResult, dispatch);
  };

  return (
    <KeypadContainer data-cy="keypad">
      {operations.map(({ id, innerText }) =>
        <Key key={id} onClick={handleClick}>{innerText}</Key>,
      )}
    </KeypadContainer>
  );
};
