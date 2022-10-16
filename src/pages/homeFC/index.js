import { Button, Display, Keyboard, LeftSide, DisplayHistory } from '@components/calculator/leftSide';
import { History, Title, RightSide } from '@components/calculator/rightSide';
import { Wrapper } from '@components/calculator/wrapper';
import { operations } from '@constants/operations';
import { useSelector } from 'react-redux';
import { actions } from '@store/actions';
import { useActions } from '@store/hooks/useActions';
import { calculation } from '../../assets/calculator';
import { EMPTY_STRING } from '@constants/empty';

export const digits = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const operands = ['+', '-', '*', '/'];

export const HomeFC = () => {
  const {
    setCurrentValue,
    setPrevValue,
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
          calculation(null, null);
        }

        // if field for current value empty, don't input operation
        if (currentValue === EMPTY_STRING) return;

        const digitValue = +Number.parseFloat(currentValue).toFixed(3);

        if (operands.includes(innerValue)) {
          setCurrentOperation(innerValue);
          calculation(digitValue, innerValue);
        }

        if (innerValue === '=' && previousValue) {
          const calculationValue = calculation(digitValue, previousOperation);
          setResultCalculation(calculationValue);
          calculation(null, null);
        }

        if (innerValue === 'CE') {
          setPrevValue();
        }
      }
    } catch (e) {
      console.log('Error into homeFC: ', e.message);
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
