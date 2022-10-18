import React from 'react';
import { Button, Display, DisplayHistory, Keyboard, LeftSide } from '@components/calculator/leftSide';
import { History, RightSide, Title } from '@components/calculator/rightSide';
import { Wrapper } from '@components/calculator/wrapper';
import { operations } from '@constants/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentValue,
  selectHistory,
  selectPreviousOperation,
  selectPreviousValue,
  selectResult
} from '@store/selectors';
import { keyboardHandler } from '@helpers/calculator';

export const HomeFC = () => {
  const dispatch = useDispatch();

  const previousValue = useSelector(selectPreviousValue);
  const currentValue = useSelector(selectCurrentValue);
  const previousOperation = useSelector(selectPreviousOperation);
  const result = useSelector(selectResult);
  const history = useSelector(selectHistory);

  const onKeyboardClick = (event) => {
    keyboardHandler(event, currentValue, previousValue, previousOperation, dispatch);
  }

  return (
    <Wrapper>
      <LeftSide>
        <DisplayHistory>{previousValue}</DisplayHistory>
        <Display>{currentValue || result}</Display>
        <Keyboard>
          {operations.map(({id, value}) =>
            <Button key={id} onClick={onKeyboardClick}>{value}</Button>
          )}
        </Keyboard>
      </LeftSide>
      <RightSide>
        <Title>History</Title>
        <History>
          {history.map((expression, index) => <div key={index}>{expression}</div>)}
        </History>
      </RightSide>
    </Wrapper>
  )
}
