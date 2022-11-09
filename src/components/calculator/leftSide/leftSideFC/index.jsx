import React from 'react';

import { Display } from '@components/calculator/display/displayFC';
import { Keypad } from '@components/calculator/keypad/keypadFC';
import { LeftSideContainer } from '@components/calculator/leftSide/styles';

export const LeftSide = () => (
  <LeftSideContainer data-cy="leftSide">
    <Display/>
    <Keypad/>
  </LeftSideContainer>
);
