import React from 'react';

import { Display } from '@components/calculator/display/displayCC';
import { Keypad } from '@components/calculator/keypad/keypadCC';
import { LeftSideContainer } from '@components/calculator/leftSide/styles';

export class LeftSide extends React.PureComponent {
  render() {
    return (
      <LeftSideContainer>
        <Display/>
        <Keypad/>
      </LeftSideContainer>
    );
  }
}
