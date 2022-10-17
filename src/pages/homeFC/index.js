import { Button, Display, DisplayHistory, Keyboard, LeftSide } from '@components/calculator/leftSide';
import { History, RightSide, Title } from '@components/calculator/rightSide';
import { Wrapper } from '@components/calculator/wrapper';
import { digits, mathOperators, operations } from '@constants/operations';
import { useSelector } from 'react-redux';
import { actions } from '@store/actions';
import { useActions } from '@store/hooks/useActions';
import { calculation } from '../../assets/calculator';
import { EMPTY_STRING } from '@constants/empty';
import {
  selectCurrentValue,
  selectHistory,
  selectPreviousOperation,
  selectPreviousValue,
  selectResult
} from '@store/selectors';

export const HomeFC = () => {
  const {
    setCurrentValue,
    setPrevValue,
    setCurrentOperation,
    setResultCalculation,
    clearDisplay,
    setPlusOrMinus,
  } = useActions(actions);

  const previousValue = useSelector(selectPreviousValue);
  const currentValue = useSelector(selectCurrentValue);
  const previousOperation = useSelector(selectPreviousOperation);
  const currentOperation = useSelector(state => state.app.currentOperation);
  const result = useSelector(selectResult);
  const history = useSelector(selectHistory);

  const onSetValueClick = event => {
    const innerValue = event.currentTarget.innerText;

    const numbers = /[0-9]/g;
    const digitValue = +Number.parseFloat(currentValue).toFixed(3);

    try {
      switch (innerValue) {
        case 'C': {
          setPrevValue(currentValue.slice(0, currentValue.length -1));
          break;
        }
        case 'CE': {
          clearDisplay();
          calculation(null, null);
          break;
        }
        case '-/+': {
          setPlusOrMinus(currentValue.indexOf('-') === 0 ? currentValue.slice(1, currentValue.length) : '-' + currentValue);
          break;
        }
        case '(': {

          break;
        }
        case ')': {

          break;
        }
        case '=': {
          if (previousValue !== EMPTY_STRING) {
            const calculationValue = calculation(digitValue, previousOperation);
            setResultCalculation(calculationValue, `${previousValue} ${currentValue} = ${calculationValue}`);

            // reset value and history of calculator
            calculation(null, null);
          }
          break;
        }
        default: {
          if (digits.includes(innerValue)) {
            if (innerValue === '.' && currentValue.includes('.')) return;
            setCurrentValue(innerValue);
          }

          if (mathOperators.includes(innerValue) && currentValue.match(numbers)) {
            setCurrentOperation(innerValue);
            calculation(digitValue, innerValue);
          }
        }
      }
    } catch (error) {
      setCurrentValue(error.message)
    }
  }

  return (
    <Wrapper>
      <LeftSide>
        <DisplayHistory>{previousValue}</DisplayHistory>
        <Display>{currentValue || result}</Display>
        <Keyboard>
          {operations.map(({id, value}) =>
            <Button key={id} onClick={onSetValueClick}>{value}</Button>
          )}
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
