import React,  { useState } from 'react';

import { Button } from '@components/button/buttonFC';
import { History } from '@components/calculator/history/historyFC';
import { HistoryContainer } from '@components/calculator/history/styles';
import { RightSideContainer } from '@components/calculator/rightSide/styles';

export const RightSide = () => {
  const [isShow, setIsShow] = useState(true);

  const onClickHandler = () => {
    setIsShow(state => !state);
  };

  return (
    <RightSideContainer data-cy="rightSide">
      <Button
        title={`${isShow ? 'Close' : 'Show'} history`}
        onClick={onClickHandler}
      />
      <HistoryContainer data-cy="historyContainer">
        {isShow ? <History/> : null}
      </HistoryContainer>
    </RightSideContainer>
  );
};
