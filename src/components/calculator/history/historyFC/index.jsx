import React from 'react';
import { useSelector } from 'react-redux';
import { HistoryList, HistoryItem } from '@components/calculator/history/styles';
import { Title } from '@components/calculator';
import { selectHistory } from '@store/selectors';

export const History = () => {
  const history = useSelector(selectHistory);

  return (
    <React.Fragment>
      <Title>History</Title>
      <HistoryList data-cy="historyList">
        {history.map((expression, index) =>
          <HistoryItem key={index}>{expression}</HistoryItem>
        )}
      </HistoryList>
    </React.Fragment>
  )
}
