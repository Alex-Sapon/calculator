import { Button, Display, Keyboard, LeftSide, DisplayHistory } from '@components/calculator/leftSide';
import { History, Title, RightSide } from '@components/calculator/rightSide';
import { Wrapper } from '@components/calculator/wrapper';
import { operations } from '@constants/operations';
import { useSelector } from 'react-redux';
import { actions } from '@store/actions';
import { useActions } from '@store/hooks/useActions';
import { calculation } from '../../assets/calculator';

export const digits = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const operands = ['+', '-', '*', '/'];

export const EMPTY_STRING = '';

export const HomeFC = () => {
  const {
    setCurrentValue,
    setPrevValue,
    updateDisplay,
    setCurrentOperation,
    setResultCalculation,
    clearDisplay
  } = useActions(actions);

  const previousValue = useSelector(state => state.app.previousValue);
  const currentValue = useSelector(state => state.app.currentValue);
  const previousOperation = useSelector(state => state.app.previousOperation);
  const currentOperation = useSelector(state => state.app.currentOperation);
  const result = useSelector(state => state.app.result);
  const history = useSelector(state => state.app.history);

  const onSetValueClick = (e) => {
    const innerValue = e.currentTarget.innerText;
    try {


      if (digits.includes(innerValue)) {
        if (innerValue === '.' && currentValue.includes('.')) return;
        setCurrentValue(innerValue);
      } else {
        if (innerValue === 'C') {
          clearDisplay();
          calculation(null, null, true);
        }

        if (currentValue === EMPTY_STRING) return;

        let calculationValue;

        if (innerValue === '=' && previousValue) {
          calculationValue = calculation(currentValue, previousOperation);
          setResultCalculation(calculationValue);
          calculation(null, null, true);
        }

        if (operands.includes(innerValue)) {
          setCurrentOperation(innerValue);
        }

        if (innerValue === 'CE') {

        }
      }
    } catch (e) {
      console.log('Some error into homeFC: ', e.message);
    }
  }

  return (
    <Wrapper>
      <LeftSide>
        <DisplayHistory>{previousValue}</DisplayHistory>
        <Display>{currentValue || result}</Display>
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
