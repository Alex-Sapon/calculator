import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Key } from '@components/calculatorFC/keyFC';
import { KeypadContainer } from '@components/containers';
import { operations } from '@constants/operations';
import { keypadHandler } from '@helpers/keypadHandler';
import { selectExpression, selectOperation, selectResult, selectTempResult, selectValue } from '@store/selectors';

export const Keypad = memo(() => {
  const dispatch = useDispatch();

  const value = useSelector(selectValue);
  const expression = useSelector(selectExpression);
  const operation = useSelector(selectOperation);
  const tempResult = useSelector(selectTempResult);
  const result = useSelector(selectResult);

  const handleClick = event => {
    keypadHandler(event, value, expression, operation, tempResult, result, dispatch);
  };

  return (
    <KeypadContainer data-cy="keypad" onClick={handleClick}>
      {operations.map(({ id, innerText }) =>
        <Key
          key={id}
          innerText={innerText}
        />,
      )}
    </KeypadContainer>
  );
});
