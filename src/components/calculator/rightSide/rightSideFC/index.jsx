import { useState } from 'react';
import { History } from '@components/calculator/history/historyFC';
import { Button } from '@components/button/buttonFC';
import { RightSideContainer } from '@components/calculator/rightSide/styles';
import { HistoryContainer } from '@components/calculator/history/styles';

export const RightSide = () => {
  const [isShow, setIsShow] = useState(true);

  const onClickHandler = () => {
    setIsShow(state => !state);
  }

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
  )
}
