import { Button, Display, Keyboard, LeftSide, DisplayHistory } from '@components/calculator/leftSide';
import { History, Title, RightSide } from '@components/calculator/rightSide';
import { Wrapper } from '@components/calculator/wrapper';
import { operations } from '@constants/operations';
import { useSelector } from 'react-redux';
import { actions } from '@store/actions';
import { useActions } from '@store/hooks/useActions';
import { calculation } from '../../assets/calculator';

export const digits = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const operation = ['+', '-', '*', '/'];

export const HomeFC = () => {
  const {setCurrentValue, setPrevValue, updateDisplay, setCurrentOperand, setResultCalculation} = useActions(actions);

  const previousValue = useSelector(state => state.app.previousValue);
  const currentValue = useSelector(state => state.app.currentValue);
  const previousOperand = useSelector(state => state.app.previousOperand);
  const currentOperand = useSelector(state => state.app.currentOperand);
  const history = useSelector(state => state.app.history);

  const onSetValueClick = (e) => {
    const innerValue = e.currentTarget.innerText;
    try {
      if (digits.includes(innerValue)) {
        if (innerValue === '.' && currentValue.includes('.')) return;
        setCurrentValue(innerValue);
      } else {
        if (innerValue === '=' && previousValue && currentValue) {
          setResultCalculation('34')
        }

        if (operation.includes(innerValue)) {
          setCurrentOperand(innerValue);
        }

        // if (innerValue === 'CE') {
        //   setPrevValue();
        // }
        //console.log(calculation(previousValue, currentValue, currentOperand))

      }
    } catch (e) {
      console.log('Error into homeFC')
    }
  }

  return (
    <Wrapper>
      <LeftSide>
        <DisplayHistory>{previousValue}</DisplayHistory>
        <Display>{currentValue}</Display>
        <Keyboard>
          {operations.map(({id, value}) => <Button key={id} onClick={onSetValueClick}>{value}</Button>)}
        </Keyboard>
      </LeftSide>
      <RightSide>
        <Title>History</Title>
        <History>
          {history.map((expression, index) => <div key={index}>{expression}</div>)}
        </History>
      </RightSide>
    </Wrapper>
  )
}
