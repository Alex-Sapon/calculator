import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Key } from '@components/calculatorFC/keyFC';
import { KeypadContainer } from '@components/containers';
import { operations } from '@constants/operations';
import { keypadHandler } from '@helpers/keypadHandler';
import { selectValue, selectOperation, selectExpression, selectTempResult } from '@store/selectors';

export const Keypad = memo(() => {
  const dispatch = useDispatch();

  const expression = useSelector(selectExpression);
  const value = useSelector(selectValue);
  const operation = useSelector(selectOperation);
  const tempResult = useSelector(selectTempResult);

  const handleClick = useCallback(event => {
    keypadHandler(event, value, expression, operation, tempResult, dispatch);
  }, [value, expression, operation, tempResult, dispatch]);

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
