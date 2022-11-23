import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DisplayHistory, DisplayMain, Expression } from '@components/containers';
import { numberWithCommas } from '@helpers';
import { selectExpression, selectResult, selectValue } from '@store/selectors';

class DisplayComponent extends React.Component {
  render() {
    const { value, expression, result } = this.props;

    return (
      <React.Fragment>
        <DisplayHistory>
          <Expression>{expression}</Expression>
        </DisplayHistory>
        <DisplayMain>{value || result}</DisplayMain>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  value: numberWithCommas(selectValue(state)),
  expression: numberWithCommas(selectExpression(state)),
  result: numberWithCommas(selectResult(state)),
});

export const Display = connect(mapStateToProps, null)(DisplayComponent);

DisplayComponent.propTypes = {
  value: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
