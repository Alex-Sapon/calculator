import { v1 } from 'uuid';

import { EMPTY_STRING, VALUE_ONE, VALUE_ZERO } from '@constants/empty';
import { digits, mathOperators } from '@constants/operations';
import { getCorrectlyValue, getResultCalculation, getResultExpression, trimExpression } from '@helpers';
import {
  changeOperator,
  changeViewMode,
  clearDisplay,
  setCurrentValue,
  setError,
  setExpression,
  setResultCalculation,
  setTempResult,
} from '@store/actions';
import { calculation } from '@utils/calculator';

export const keypadHandler = (event, calculatorState, dispatch) => {
  const { value, expression, operation, tempResult, result } = calculatorState;
  const key = event.target.textContent;
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
      dispatch(setCurrentValue(value.indexOf('-') === VALUE_ZERO ? value.slice(1, value.length) : `-${value}`));
      break;
    }
    case '(': {
      dispatch(setExpression(key, `${expression} ${getCorrectlyValue(value + key)}`));
      break;
    }
    case ')': {
      if (!expression.includes('(') || !value.match(numbers)) return;
      dispatch(changeViewMode(true));
      dispatch(setExpression(key, `${expression} ${getCorrectlyValue(value + key)}`));
      break;
    }
    case '=': {
      try {
        if (tempResult && result) {
          const calc = calculation(trimExpression(tempResult, operation, result));
          dispatch(setResultCalculation(calc.result, getResultExpression(calc.result, expression, value), v1()));
          dispatch(setExpression(operation, trimExpression(calc.result, operation, tempResult).join(' ')));
        }

        if (expression !== EMPTY_STRING && value.match(numbers)) {
          const res = getResultCalculation(tempResult, expression, operation, value);
          dispatch(setResultCalculation(res, getResultExpression(res, expression, operation, value), v1()));
          dispatch(setExpression(operation, trimExpression(res, operation, tempResult).join(' ')));

          if (res) {
            dispatch(setTempResult(res));
          }
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
          if (value.match(numbers)) {
            const res = getResultCalculation(tempResult, expression, operation, value);
            dispatch(setExpression(operation, trimExpression(expression, operation, value).join(' ')));
            dispatch(changeOperator(key));

            if (res) {
              dispatch(setTempResult(res));
            }
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
