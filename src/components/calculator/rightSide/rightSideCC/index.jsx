import React from 'react';

import { Button } from '@components/button/buttonCC';
import { History } from '@components/calculator/history/historyCC';
import { HistoryContainer } from '@components/calculator/history/styles';
import { RightSideContainer } from '@components/calculator/rightSide/styles';

export class RightSide extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = { isShow: true };
  }

  onClickHandler() {
    this.setState(prevState => ({ isShow: !prevState.isShow }));
  }

  render() {
    const { isShow } = this.state;

    return (
      <RightSideContainer>
        <Button
          title={`${isShow ? 'Close' : 'Show'} history`}
          onClick={this.onClickHandler}
        />
        <HistoryContainer>
          {isShow ? <History/> : null}
        </HistoryContainer>
      </RightSideContainer>
    );
  }
}
