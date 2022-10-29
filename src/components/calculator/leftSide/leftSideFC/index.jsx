import { LeftSideContainer } from '@components/calculator/leftSide/styles';
import { Display } from '@components/calculator/display/displayFC';
import { Keypad } from '@components/calculator/keypad/keypadFC';

export const LeftSide = () => (
  <LeftSideContainer data-cy="leftSide">
    <Display/>
    <Keypad/>
  </LeftSideContainer>
)
