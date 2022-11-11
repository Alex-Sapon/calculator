import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Key, KeypadContainer } from '@components/containers/keypad/styles';
import { operations } from '@constants/operations';
import { keypadHandler } from '@helpers/keypadHandler';

class KeypadComponent extends React.Component {
  handleClick = event => {
    const { onKeypadClick, value, expression, operation, tempResult } = this.props;
    onKeypadClick(event, value, expression, operation, tempResult);
  };

  render() {
    return (
      <KeypadContainer>
        {operations.map(({ id, innerText }) =>
          <Key key={id} onClick={this.handleClick}>{innerText}</Key>,
        )}
      </KeypadContainer>
    );
  }
}

const mapStateToProps = state => ({
  value: state.appReducer.value,
  expression: state.appReducer.expression,
  operation: state.appReducer.operation,
  tempResult: state.appReducer.tempResult,
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
