import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Title } from '@components/calculator';
import { HistoryList, HistoryItem } from '@components/calculator/history/styles';

class HistoryComponent extends React.PureComponent {
  render() {
    const { history } = this.props;
    
    return (
      <React.Fragment>
        <Title>History</Title>
        <HistoryList>
          {history.map(expression =>
            <HistoryItem key={expression}>{expression}</HistoryItem>,
          )}
        </HistoryList>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  history: state.appReducer.history,
});

export const History = connect(mapStateToProps, null)(HistoryComponent);

HistoryComponent.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
};

HistoryComponent.defaultProps = {
  history: [],
};
