import {
  setCurrentValue,
  setPrevValue,
  setCurrentOperation,
  setResultCalculation,
  clearDisplay,
  setPlusOrMinus,
} from '@store/actions';
import { calculation } from '@utils/calculator';
import { digits, mathOperators } from '@constants/operations';
import { EMPTY_STRING } from '@constants/empty';

export const keyboardHandler = (event, currentValue, previousValue, previousOperation, dispatch) => {
  const innerValue = event.currentTarget.innerText;

  const numbers = /[0-9]/g;
  const digitValue = +Number.parseFloat(currentValue).toFixed(3);

  try {
    switch (innerValue) {
      case 'C': {
        dispatch(setPrevValue(currentValue.slice(0, currentValue.length -1)));
        break;
      }
      case 'CE': {
        dispatch(clearDisplay());
        calculation(null, null);
        break;
      }
      case '-/+': {
        dispatch(setPlusOrMinus(currentValue.indexOf('-') === 0 ? currentValue.slice(1, currentValue.length) : '-' + currentValue));
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
          dispatch(setResultCalculation(calculationValue, `${previousValue} ${currentValue} = ${calculationValue}`));

          calculation(null, null);
        }
        break;
      }
      default: {
        if (digits.includes(innerValue)) {
          if (innerValue === '.' && currentValue.includes('.')) return;
          dispatch(setCurrentValue(innerValue));
        }

        if (mathOperators.includes(innerValue) && currentValue.match(numbers)) {
          dispatch(setCurrentOperation(innerValue));
          calculation(digitValue, innerValue);
        }
      }
    }
  } catch (error) {
    dispatch(setCurrentValue(error.message));
  }
}
