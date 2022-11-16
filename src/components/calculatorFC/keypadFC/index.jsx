import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Key } from '@components/calculatorFC/keyFC';
import { KeypadContainer } from '@components/containers';
import { operations } from '@constants/operations';
import { keypadHandler } from '@helpers/keypadHandler';
import { selectCalculator } from '@store/selectors';

export const Keypad = memo(() => {
  const dispatch = useDispatch();

  const calculator = useSelector(selectCalculator);

  const handleClick = event => {
    keypadHandler(event, calculator, dispatch);
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
