import React from "react";

import { useSelector } from "react-redux";

import { HistoryList, HistoryItem } from "@components/containers/history/styles";
import { Title } from "@components/containers/styles";
import { selectHistory } from "@store/selectors";

export const History = () => {
  const history = useSelector(selectHistory);

  return (
    <React.Fragment>
      <Title>History</Title>
      <HistoryList data-cy="historyList">
        {history.map(expression =>
          <HistoryItem key={expression}>{expression}</HistoryItem>,
        )}
      </HistoryList>
    </React.Fragment>
  );
};
