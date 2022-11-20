import React from 'react';

import { useSelector } from 'react-redux';

import { Display } from '@components/calculatorFC/displayFC';
import { History } from '@components/calculatorFC/historyFC';
import { Keypad } from '@components/calculatorFC/keypadFC';
import { Container, HistoryContainer, LeftSide, RightSide } from '@components/containers';
import { selectIsShow } from '@store/selectors';

export const CalculatorFunction = () => {
  const isShow = useSelector(selectIsShow);

  return (
    <Container>
      <LeftSide data-cy="leftSide">
        <Display />
        <Keypad />
      </LeftSide>
      <RightSide data-cy="rightSide">
        <HistoryContainer data-cy="historyContainer">
          {isShow ? <History /> : null}
        </HistoryContainer>
      </RightSide>
    </Container>
  );
};
