import React, { useState } from 'react';

import { Button } from '@components/calculatorFC/buttonFC';
import { Display } from '@components/calculatorFC/displayFC';
import { History } from '@components/calculatorFC/historyFC';
import { Keypad } from '@components/calculatorFC/keypadFC';
import { Container, HistoryContainer, LeftSide, RightSide } from '@components/containers';

export const CalculatorFunction = () => {
  const [isShow, setIsShow] = useState(true);

  const onClickHandler = () => {
    setIsShow(state => !state);
  };

  return (
    <Container>
      <LeftSide data-cy="leftSide">
        <Display />
        <Keypad />
      </LeftSide>
      <RightSide data-cy="rightSide">
        <Button
          title={`${isShow ? 'Close' : 'Show'} history`}
          handleClick={onClickHandler}
        />
        <HistoryContainer data-cy="historyContainer">
          {isShow ? <History /> : null}
        </HistoryContainer>
      </RightSide>
    </Container>
  );
};
