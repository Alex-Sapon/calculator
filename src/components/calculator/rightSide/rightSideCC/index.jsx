import React from 'react';
import { History } from '@components/calculator/history/historyCC';
import { Button } from '@components/button/buttonCC';
import { RightSideContainer } from '@components/calculator/rightSide/styles';
import { HistoryContainer } from '@components/calculator/history/styles';

export class RightSide extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = { isShow: true }
  }

  onClickHandler() {
    this.setState(prevState => ({ isShow: !prevState.isShow }));
  }

  render() {
    return (
      <RightSideContainer>
        <Button
          title={`${this.state.isShow ? 'Close' : 'Show'} history`}
          onClick={this.onClickHandler}
        />
        <HistoryContainer>
          {this.state.isShow ? <History/> : null}
        </HistoryContainer>
      </RightSideContainer>
    )
  }
}
