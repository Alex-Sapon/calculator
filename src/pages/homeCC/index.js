import React from 'react';
import { Button, Display, Keyboard, LeftSide, DisplayHistory } from '@components/calculator/leftSide';
import { History, RightSide, Title } from '@components/calculator/rightSide';
import { Wrapper } from '@components/calculator/wrapper';
import { operations } from '@constants/operations';

const h = ['100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2', '100 * 2']

export class HomeCC extends React.Component {

  render() {
    return (
      <Wrapper>
        <LeftSide>
          <DisplayHistory>{'7'}</DisplayHistory>
          <Display>{'7'}</Display>
          <Keyboard>
            {operations.map((option, i) => <Button key={i} >{option}</Button>)}
          </Keyboard>
        </LeftSide>
        <RightSide>
          <Title>History</Title>
          <History>{h.map((e, i) => <div key={i}>{e}</div>)}</History>
        </RightSide>
      </Wrapper>
    )
  }
}
