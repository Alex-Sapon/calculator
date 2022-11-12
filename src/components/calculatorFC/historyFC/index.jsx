import React from 'react';

import { useSelector } from 'react-redux';

import { HistoryList, HistoryItem, Title } from '@components/containers';
import { selectHistory } from '@store/selectors';

export const History = () => {
  const history = useSelector(selectHistory);

  return (
    <React.Fragment>
      <Title>History</Title>
      <HistoryList data-cy="historyList">
        {history.map(({ id, historyItem }) =>
          <HistoryItem key={id}>{historyItem}</HistoryItem>,
        )}
      </HistoryList>
    </React.Fragment>
  );
};
