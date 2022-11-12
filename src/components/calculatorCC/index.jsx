import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Display } from '@components/calculatorCC/displayCC';
import { History } from '@components/calculatorCC/historyCC';
import { Keypad } from '@components/calculatorCC/keypadCC';
import { Container, HistoryContainer, LeftSide, RightSide } from '@components/containers';

class CalculatorClass extends React.Component {
  render() {
    const { isShow } = this.props;

    return (
      <Container>
        <LeftSide>
          <Display />
          <Keypad />
        </LeftSide>
        <RightSide>
          <HistoryContainer>
            {isShow ? <History /> : null}
          </HistoryContainer>
        </RightSide>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isShow: state.application.isShow,
});

CalculatorClass.propsType = {
  isShow: PropTypes.bool,
};

export default connect(mapStateToProps, null)(CalculatorClass);
