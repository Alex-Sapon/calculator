import {
  setCurrentValue,
  setExpression,
  setResultCalculation,
  clearDisplay,
  setError,
} from '@store/actions';
import { calculation } from '@utils/calculator';
import { digits, mathOperators } from '@constants/operations';
import { EMPTY_STRING, VALUE_ZERO } from '@constants/empty';

const setZeroBeforeDot = value => value.indexOf('.') === 0 ? '0' + value : value;

export const keypadHandler = (event, currentValue, expression, operation, dispatch) => {
  const innerValue = event.currentTarget.innerText;

  const numbers = /[0-9]/g;
  const digitValue = +Number.parseFloat(currentValue).toFixed(3);

  try {
    switch (innerValue) {
      case 'C': {
        dispatch(setCurrentValue(currentValue.slice(0, currentValue.length - 1)));
        break;
      }
      case 'CE': {
        dispatch(clearDisplay());
        calculation(null, null);
        break;
      }
      case '-/+': {
        dispatch(setCurrentValue(currentValue.indexOf('-') === VALUE_ZERO ? currentValue.slice(1, currentValue.length) : '-' + currentValue));
        break;
      }
      case '(': {

        break;
      }
      case ')': {

        break;
      }
      case '=': {
        if (expression !== EMPTY_STRING && currentValue.match(numbers)) {
          const calculationValue = calculation(digitValue, operation);
          dispatch(setResultCalculation(calculationValue.toString(), `${expression}  ${currentValue} = ${calculationValue}`));

          calculation(null, null);
        }
        break;
      }
      default: {
        if (digits.includes(innerValue)) {
          if (innerValue === '.' && currentValue.includes('.')) return;
          dispatch(setCurrentValue(setZeroBeforeDot(currentValue) + innerValue));
        }

        if (mathOperators.includes(innerValue) && currentValue.match(numbers)) {
          dispatch(setExpression(innerValue, `${expression} ${setZeroBeforeDot(currentValue)} ${innerValue}`));
          calculation(digitValue, innerValue);
        }
      }
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
}
