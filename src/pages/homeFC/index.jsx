import { Calculator } from '@components/calculator';
import { LeftSide } from '@components/calculator/leftSide/leftSideFC';
import { RightSide } from '@components/calculator/rightSide/rightSideFC';

export const CalculatorFC = () => (
  <Calculator>
    <LeftSide/>
    <RightSide/>
  </Calculator>
)
