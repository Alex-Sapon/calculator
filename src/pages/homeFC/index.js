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
  } = useActions(actions);

  const previousValue = useSelector(selectPreviousValue);
  const currentValue = useSelector(selectCurrentValue);
  const previousOperation = useSelector(selectPreviousOperation);
  const result = useSelector(selectResult);
  const history = useSelector(selectHistory);

  const onSetValueClick = (e) => {
    const innerValue = e.currentTarget.innerText;

    try {
      if (digits.includes(innerValue)) {
        if (innerValue === '.' && currentValue.includes('.')) return;
        setCurrentValue(innerValue);
      } else {
        const numbers = /[0-9]/g;
        const digitValue = +Number.parseFloat(currentValue).toFixed(3);

        if (innerValue === 'C') {
          clearDisplay();

          // reset value and history of calculator
          calculation(null, null);
        }

        // if field with current value empty, don't input operation
        if (currentValue === EMPTY_STRING) return;

        if (mathOperators.includes(innerValue) && currentValue.match(numbers)) {
          setCurrentOperation(innerValue);
          calculation(digitValue, innerValue);
        }

        if (innerValue === '=' && previousValue !== EMPTY_STRING) {
          const calculationValue = calculation(digitValue, previousOperation);
          setResultCalculation(calculationValue);

          // reset value and history of calculator
          calculation(null, null);
        }

        if (innerValue === 'CE') {
          setPrevValue();
        }
      }
    } catch (e) {
      setCurrentValue('Error into homeFC')
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
