import { v1 } from 'uuid';

import { EMPTY_STRING, VALUE_ONE, VALUE_ZERO } from '@constants/empty';
import { digits, mathOperators } from '@constants/operations';
import {
  checkBracketBalanced,
  expressionBuilder,
  getCorrectlyValue,
  finallyExpression,
  getAnotherOperator,
  parsing,
} from '@helpers';
import {
  changeOperator,
  clearDisplay,
  setCurrentValue,
  setError,
  setExpression,
  setResultValue,
  setResultCalculation,
  setTempResult,
} from '@store/actions';
import { calculation } from '@utils/calculator';

export const keypadHandler = (
  event,
  value,
  expression,
  operation,
  tempResult,
  result,
  dispatch,
) => {

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
      dispatch(setCurrentValue(value.indexOf('-') === VALUE_ZERO
        ? value.slice(1, value.length)
        : `-${value}`,
      ));
      break;
    }
    case '(': {
      const splitExpression = expression.split(' ');
      dispatch(setExpression(parsing(
        expression,
        splitExpression[splitExpression.length - 1] !== operation ? operation : EMPTY_STRING,
        key,
      ).join(' ')));
      break;
    }
    case ')': {
      if (!expression.includes('(')) return;
      dispatch(setExpression(parsing(expression, value, key).join(' ')));
      break;
    }
    case '=': {
      try {
        if (expression.match(numbers) && value.match(numbers) && !expression.includes('(')) {
          const { result: finallyVal } = calculation(parsing(expression, value));
          dispatch(setResultCalculation(finallyVal, finallyExpression(finallyVal, expression, value), v1()));
          dispatch(setTempResult(finallyVal));
        } else if (tempResult && result) {
          const { result: finallyVal } = calculation(parsing(tempResult, operation, result));  
          dispatch(setResultCalculation(finallyVal, finallyExpression(finallyVal, result, operation, tempResult), v1()));
        } else if (expression.includes('(')
          && expression.includes(')') 
          && checkBracketBalanced(expression) 
          && value === EMPTY_STRING) {    
          const { result: finallyVal } = calculation(parsing(expression));
          dispatch(setResultCalculation(finallyVal, finallyExpression(finallyVal, expression, value), v1()));
        } else {
          dispatch(setError('Invalid expression!'));
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
            dispatch(setExpression(parsing(expression, value, key).join(' ')));
            if (!expression.includes('(')) {
              dispatch(setResultValue(expressionBuilder(tempResult, expression, operation, value)));
            }
          } else {
            dispatch(setExpression(getAnotherOperator(expression, operation, key)));
          }
          dispatch(changeOperator(key));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    }
  }
};
