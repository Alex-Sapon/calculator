import React from 'react';
import { KeypadContainer, Button } from '@components/calculator/keypad/styles';
import { operations } from '@constants/operations';
import { connect } from 'react-redux';
import { keypadHandler } from '@helpers';
import PropTypes from 'prop-types';

class KeypadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onKeypadClick, value, expression, operation, tempResult } = this.props;
    onKeypadClick(event, value, expression, operation, tempResult);
  }

  render() {
    return (
      <KeypadContainer>
        {operations.map(({ id, value }) => <Button key={id} onClick={this.handleClick}>{value}</Button>)}
      </KeypadContainer>
    )
  }
}

const mapStateToProps = state => ({
  value: state.app.value,
  expression: state.app.expression,
  operation: state.app.operation,
  tempResult: state.app.tempResult,
})

const mapDispatchToProps = dispatch => ({
  onKeypadClick: (event, value, expression, operation, tempResult) => {
    keypadHandler(event, value, expression, operation, tempResult, dispatch);
  },
})

export const Keypad = connect(mapStateToProps, mapDispatchToProps)(KeypadComponent);

KeypadComponent.propsType = {
  value: PropTypes.func,
  expression: PropTypes.string,
  operation: PropTypes.string,
  tempResult: PropTypes.string,
  onKeypadClick: PropTypes.func,
}
