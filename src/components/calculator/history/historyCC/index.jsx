import React from 'react';
import { connect } from 'react-redux';
import { HistoryList, HistoryItem } from '@components/calculator/history/styles';
import { Title } from '@components/calculator';
import PropTypes from 'prop-types';

class HistoryComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title>History</Title>
        <HistoryList>
          {this.props.history.map((expression, index) => <HistoryItem key={index}>{expression}</HistoryItem>)}
        </HistoryList>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  history: state.app.history,
})

export const History = connect(mapStateToProps, null)(HistoryComponent);

HistoryComponent.propTypes = {
  history: PropTypes.array,
}
