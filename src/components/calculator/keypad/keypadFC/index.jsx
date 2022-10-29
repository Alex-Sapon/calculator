import React from 'react';
import { KeypadContainer, Button } from '@components/calculator/keypad/styles';
import { operations } from '@constants/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectValue, selectOperation, selectExpression, selectTempResult } from '@store/selectors';
import { keypadHandler } from '@helpers';

export const Keypad = () => {
  const dispatch = useDispatch();

  const expression = useSelector(selectExpression);
  const value = useSelector(selectValue);
  const operation = useSelector(selectOperation);
  const tempResult = useSelector(selectTempResult);

  const handleClick = event => {
    keypadHandler(event, value, expression, operation, tempResult, dispatch);
  }

  return (
    <KeypadContainer data-cy="keypad">
      {operations.map(({ id, value }) =>
        <Button key={id} onClick={handleClick}>{value}</Button>
      )}
    </KeypadContainer>
  )
}
