import React from "react";

import { Button } from "@components/calculatorCC/buttonCC";
import { Display } from "@components/calculatorCC/displayCC";
import { History } from "@components/calculatorCC/historyCC";
import { Keypad } from "@components/calculatorCC/keypadCC";
import { Container, HistoryContainer, LeftSide, RightSide } from "@components/containers";

class CalculatorClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: true };
  }

  onClickHandler = () => {
    this.setState(prevState => ({ isShow: !prevState.isShow }));
  };

  render() {
    const { isShow } = this.state;

    return (
      <Container>
        <LeftSide>
          <Display />
          <Keypad />
        </LeftSide>
        <RightSide>
          <Button
            title={`${isShow ? "Close" : "Show"} history`}
            handleClick={this.onClickHandler}
          />
          <HistoryContainer>
            {isShow ? <History /> : null}
          </HistoryContainer>
        </RightSide>
      </Container>
    );
  }
}

export default CalculatorClass;