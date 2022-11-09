import { EMPTY_STRING, VALUE_ONE, VALUE_ZERO } from '@constants/empty';
import { digits, mathOperators } from '@constants/operations';
import { getCorrectlyValue, getResultCalculation, getResultExpression, trimExpression } from '@helpers';
import {
  changeOperator,
  clearDisplay,
  setCurrentValue,
  setError,
  setExpression,
  setResultCalculation,
  setTempResult,
} from '@store/actions';

export const keypadHandler = (event, value, expression, operation, tempResult, dispatch) => {
  const key = event.currentTarget.textContent;
  const numbers = /[0-9]/g;

  switch (key) {
    case 'C': {
      if (value !== '0' && value.length !== VALUE_ONE && value !== EMPTY_STRING) {
        dispatch(setCurrentValue(value.slice(0, value.length - 1)));
      } else {
        dispatch(setCurrentValue('0'));
      }
      break;
    }
    case 'CE': {
      dispatch(clearDisplay());
      break;
    }
    case '-/+': {
      dispatch(setCurrentValue(value.indexOf('-') === VALUE_ZERO ? value.slice(1, value.length) : `-${  value}`));
      break;
    }
    case '(': {
      dispatch(setExpression(key, `${expression} ${getCorrectlyValue(value + key)}`));
      break;
    }
    case ')': {
      if (!expression.includes('(') || !value.match(numbers)) return;
      dispatch(setExpression(key, `${expression} ${getCorrectlyValue(value + key)}`));
      break;
    }
    case '=': {
      try {
        if (expression !== EMPTY_STRING && value !== EMPTY_STRING && value.match(numbers)) {
          const result = getResultCalculation(tempResult, expression, operation, value);
          dispatch(setResultCalculation(result, getResultExpression(result, expression, operation, value)));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
      break;
    }
    default: {
      try {
        // input numbers and dot
        if (digits.includes(key)) {
          if (value.length > 12) return;
          if (key === '.' && value.includes('.')) return;
          dispatch(setCurrentValue(getCorrectlyValue(value + key)));
        }
        // input operations
        if (mathOperators.includes(key)) {
          if (value.match(numbers) && value !== '0') {
            const result = getResultCalculation(tempResult, expression, operation, value);
            dispatch(setExpression(operation, trimExpression(expression, operation, value).join(' ')));
            dispatch(setTempResult(result));
            dispatch(changeOperator(key));
          }

          if (expression.match(numbers)) {
            dispatch(changeOperator(key));
          }
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    }
  }
};
