import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DisplayHistory, DisplayMain, Expression, Operator } from '@components/containers';
import { numberWithCommas } from '@helpers';

class DisplayComponent extends React.Component {
  render() {
    const { expression, operation, value, result } = this.props;

    return (
      <React.Fragment>
        <DisplayHistory>
          <Expression>{expression}</Expression>
          <Operator>{operation}</Operator>
        </DisplayHistory>
        <DisplayMain>{value || result}</DisplayMain>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  value: numberWithCommas(state.calculator.value),
  expression: numberWithCommas(state.calculator.expression),
  result: numberWithCommas(state.calculator.result),
  operation: state.calculator.operation,
});

export const Display = connect(mapStateToProps, null)(DisplayComponent);

DisplayComponent.propTypes = {
  value: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
