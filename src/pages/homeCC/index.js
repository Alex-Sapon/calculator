import React from 'react';
import PropTypes from 'prop-types';
import { Button, Display, DisplayHistory, Keyboard, LeftSide } from '@components/calculator/leftSide';
import { History, RightSide, Title } from '@components/calculator/rightSide';
import { Wrapper } from '@components/calculator/wrapper';
import { operations } from '@constants/operations';
import { connect } from 'react-redux';
import { keyboardHandler } from '@helpers/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.props.onKeyboardClick(event, this.props.currentValue, this.props.previousValue, this.props.previousOperation);
  }

  render() {
    return (
      <Wrapper>
        <LeftSide>
          <DisplayHistory>{this.props.previousValue}</DisplayHistory>
          <Display>{this.props.currentValue || this.props.result}</Display>
          <Keyboard>
            {operations.map(({id, value}) => <Button key={id} onClick={this.onButtonClick}>{value}</Button>)}
          </Keyboard>
        </LeftSide>
        <RightSide>
          <Title>History</Title>
          <History>
            {this.props.history?.map((expression, index) => <div key={index}>{expression}</div>)}
          </History>
        </RightSide>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  previousValue: state.app.previousValue,
  currentValue: state.app.currentValue,
  previousOperation: state.app.previousOperation,
  result: state.app.result,
  history: state.app.history,
})

const mapDispatchToProps = dispatch => ({
  onKeyboardClick: (event, currentValue, previousValue, previousOperation) => {
    keyboardHandler(event, currentValue, previousValue, previousOperation, dispatch);
  }
})

export const HomeCC = connect(mapStateToProps, mapDispatchToProps)(Calculator);

HomeCC.propsType = {
  previousValue: PropTypes.string,
  currentValue: PropTypes.string,
  previousOperation: PropTypes.string,
  result: PropTypes.string,
  history: PropTypes.array,
  onKeyboardClick: PropTypes.func,
}
