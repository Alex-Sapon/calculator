import React from 'react';
import { Calculator } from '@components/calculator';
import { LeftSide } from '@components/calculator/leftSide/leftSideCC';
import { RightSide } from '@components/calculator/rightSide/rightSideCC';

export class CalculatorCC extends React.Component {
  render() {
    return (
      <Calculator>
        <LeftSide/>
        <RightSide/>
      </Calculator>
    )
  }
}
