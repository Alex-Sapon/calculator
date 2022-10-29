import React from 'react';
import { DisplayHistory, DisplayMain } from '@components/calculator/display/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numberWithCommas } from '@helpers';

class DisplayComponent extends React.Component {
  render() {
    let expression = this.props.expression;
    let operation = this.props.operation;
    let value = this.props.value;
    let result = this.props.result;

    return (
      <React.Fragment>
        <DisplayHistory>{`${expression} ${operation}`}</DisplayHistory>
        <DisplayMain>{value || result}</DisplayMain>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  value: numberWithCommas(state.app.value),
  expression: numberWithCommas(state.app.expression),
  result: numberWithCommas(state.app.result),
  operation: state.app.operation,
})

export const Display = connect(mapStateToProps, null)(DisplayComponent);

DisplayComponent.propTypes = {
  value: PropTypes.string,
  expression: PropTypes.string,
  operation: PropTypes.string,
  result: PropTypes.string,
}
