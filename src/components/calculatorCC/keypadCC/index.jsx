import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Key } from '@components/calculatorCC/keyCC';
import { KeypadContainer } from '@components/containers';
import { operations } from '@constants/operations';
import { keypadHandler } from '@helpers/keypadHandler';

class KeypadComponent extends React.Component {
  handleClick = event => {
    const { onKeypadClick, value, expression, operation, tempResult } = this.props;
    onKeypadClick(event, value, expression, operation, tempResult);
  };

  render() {
    return (
      <KeypadContainer onClick={this.handleClick}>
        {operations.map(({ id, innerText }) =>
          <Key
            key={id}
            innerText={innerText}
          />,
        )}
      </KeypadContainer>
    );
  }
}

const mapStateToProps = state => ({
  value: state.calculator.value,
  expression: state.calculator.expression,
  operation: state.calculator.operation,
  tempResult: state.calculator.tempResult,
});

const mapDispatchToProps = dispatch => ({
  onKeypadClick: (event, value, expression, operation, tempResult) => {
    keypadHandler(event, value, expression, operation, tempResult, dispatch);
  },
});

export const Keypad = connect(mapStateToProps, mapDispatchToProps)(KeypadComponent);

KeypadComponent.propsType = {
  value: PropTypes.func,
  expression: PropTypes.string,
  operation: PropTypes.string,
  tempResult: PropTypes.string,
  onKeypadClick: PropTypes.func,
};
