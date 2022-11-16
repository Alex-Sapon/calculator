import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DisplayHistory, DisplayMain, Expression, Operator } from '@components/containers';
import { numberWithCommas } from '@helpers';
import { selectExpression, selectOperation, selectResult, selectValue, selectViewMode } from '@store/selectors';

class DisplayComponent extends React.Component {
  render() {
    const { value, expression, result, operation, viewMode } = this.props;

    return (
      <React.Fragment>
        <DisplayHistory>
          {viewMode
            && <React.Fragment>
                <Expression>{expression}</Expression>
                <Operator>{operation}</Operator>
               </React.Fragment>
          }
          <Expression>{expression}</Expression>
          <Operator>{operation}</Operator>
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
  operation: selectOperation(state),
  viewMode: selectViewMode(state),
});

export const Display = connect(mapStateToProps, null)(DisplayComponent);

DisplayComponent.propTypes = {
  value: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  viewMode: PropTypes.bool.isRequired,
};
