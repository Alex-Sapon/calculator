import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Key } from '@components/calculatorCC/keyCC';
import { KeypadContainer } from '@components/containers';
import { operations } from '@constants/operations';
import { keypadHandler } from '@helpers/keypadHandler';
import { 
  selectExpression, 
  selectOperation, 
  selectResult, 
  selectTempResult, 
  selectValue,
} from '@store/selectors';

class KeypadComponent extends React.Component {
  handleClick = event => {
    const { onKeypadClick, value, expression, operation, tempResult, result } = this.props;
    onKeypadClick(event, value, expression, operation, tempResult, result);
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
  value: selectValue(state),
  expression: selectExpression(state),
  operation: selectOperation(state),
  tempResult: selectTempResult(state),
  result: selectResult(state),
});

const mapDispatchToProps = dispatch => ({
  onKeypadClick: (event, value, expression, operation, tempResult, result) => {
    keypadHandler(event, value, expression, operation, tempResult, result, dispatch);
  },
});

export const Keypad = connect(mapStateToProps, mapDispatchToProps)(KeypadComponent);

KeypadComponent.propsType = {
  value: PropTypes.func,
  expression: PropTypes.string,
  operation: PropTypes.string,
  tempResult: PropTypes.string,
  result: PropTypes.string,
  onKeypadClick: PropTypes.func,
};
