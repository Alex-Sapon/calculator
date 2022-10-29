import React from 'react';
import { HistoryList, HistoryItem } from '@components/calculator/history/styles';
import { Title } from '@components/calculator';
import { selectHistory } from '@store/selectors';
import { useSelector } from 'react-redux';

export const History = () => {
  const history = useSelector(selectHistory);

  return (
    <React.Fragment>
      <Title>History</Title>
      <HistoryList>
        {history.map((expression, index) => <HistoryItem key={index}>{expression}</HistoryItem>)}
      </HistoryList>
    </React.Fragment>
  )
}
