import React from 'react';
import { LeftSideContainer } from '@components/calculator/leftSide/styles';
import { Display } from '@components/calculator/display/displayCC';
import { Keypad } from '@components/calculator/keypad/keypadCC';

export class LeftSide extends React.Component {
  render() {
    return (
      <LeftSideContainer>
        <Display/>
        <Keypad/>
      </LeftSideContainer>
    )
  }
}
