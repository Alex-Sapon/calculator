import { v1 } from 'uuid';

import { EMPTY_STRING, VALUE_ONE, VALUE_ZERO } from '@constants/empty';
import { digits, mathOperators } from '@constants/operations';
import {
  checkBracketBalanced,
  getCorrectlyValue,
  getResultCalculation,
  getResultExpression,
  parsing,
} from '@helpers';
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

export const keypadHandler = (
  event,
  value,
  expression,
  operation,
  tempResult,
  result,
  viewMode,
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
      dispatch(changeViewMode(true));
      dispatch(setExpression(parsing(
        expression, 
        splitExpression[splitExpression.length - 1] !== operation ? operation : EMPTY_STRING,
        key,
        ).join(' ')));
      break;
    }
    case ')': {
      dispatch(changeViewMode(true));
      if (!expression.includes('(')) return;
      dispatch(setExpression(parsing(expression, value, key).join(' ')));
      break;
    }
    case '=': {
      try {
        if (tempResult && result) {
          const expValue = calculation(parsing(tempResult, operation, result));
          dispatch(setExpression(parsing(expValue.result, operation, tempResult).join(' ')));
          dispatch(setResultCalculation(
            expValue.result,
            getResultExpression(expValue.result, expression), v1(),
            ));
        }

        if (expression !== EMPTY_STRING && value.match(numbers) && !viewMode) {
          const expValue = getResultCalculation(tempResult, expression, operation, value);
          dispatch(setExpression(parsing(expValue, operation, expValue).join(' ')));
          dispatch(setResultCalculation(
            expValue,
            getResultExpression(expValue, expression, operation, value), v1(),
            ));
          dispatch(setTempResult(expValue));
        }

        // Режим viewMode - в выражении есть скобки. Произвести расчет и записать выражение с результатом
        if (checkBracketBalanced(expression) && viewMode) {
          const expValue = calculation(parsing(expression));

          dispatch(clearDisplay());
          dispatch(setCurrentValue(''));
          dispatch(setResultCalculation(
            expValue.result,
            getResultExpression(expValue.result, expression, value), v1()),
          );
          dispatch(changeViewMode(false));
        } else {
          dispatch(setError('Check out the closing brackets!'));
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
          if (value.match(numbers) && !viewMode) {
            dispatch(setExpression(parsing(expression, operation, value).join(' ')));
            dispatch(changeOperator(key));
            dispatch(setTempResult(
              getResultCalculation(tempResult, expression, operation, value) 
              || value,
              ));
          }

          // Режим viewMode - в выражении есть скобки. Запись выражения
          if (viewMode) {
            if (!Number.isNaN(Number(expression.trim()[expression.length - 1]))
              || value.match(/[0-9]/g)) {

              dispatch(setExpression(parsing(expression, value, key).join(' ')));
            }
          }

          // изменение текущего оператора
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
