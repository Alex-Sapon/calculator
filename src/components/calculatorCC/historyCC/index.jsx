import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { HistoryList, HistoryItem } from '@components/containers/history/styles';
import { Title } from '@components/containers/styles';

class HistoryComponent extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <React.Fragment>
        <Title>History</Title>
        <HistoryList>
          {history.map(({ id, historyItem }) =>
            <HistoryItem key={id}>{historyItem}</HistoryItem>,
          )}
        </HistoryList>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  history: state.calculator.history,
});

export const History = connect(mapStateToProps, null)(HistoryComponent);

HistoryComponent.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      historyItem: PropTypes.string,
    }),
  ),
};

HistoryComponent.defaultProps = {
  history: [],
};
