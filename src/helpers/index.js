import {
  clearDisplay,
  setCurrentValue,
  setError,
  setExpression,
  setResultCalculation,
  setTempResult,
  changeOperator,
} from '@store/actions';
import { calculation } from '@utils/calculator';
import { digits, mathOperators } from '@constants/operations';
import { EMPTY_STRING, VALUE_ONE, VALUE_ZERO } from '@constants/empty';

const convertExpression = value => {
  if (value.indexOf('.') === 0) {
    return '0' + value;
  }

  if (value.indexOf('0') === 0 && value.indexOf('.') !== 1) {
    return value.slice(1, value.length);
  }

  if (value.indexOf('-') === 0 && value.indexOf('0') === 1 && !value.includes('.')) {
    return '-' + value.slice(2, value.length);
  }

  if (value.indexOf('-') === 0 && value.indexOf('.') === 1 && value.length === 2) {
    return '-0.';
  }

  return value;
};

export const numberWithCommas = string => {
  if (string) {
    return string.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
  }
  return '';
}

const getResultExpression = (result, ...operands) => {
  let expression = operands.map(item => !isNaN(item) ? numberWithCommas(item) : item);
  return expression.join(' ') + ' = ' + numberWithCommas(result);
}

const checkBracketBalanced = expression => {
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    let temp = expression[i];

    if (temp === '(') {
      stack.push(temp);
      continue;
    }

    if (temp === ')') {
      if (stack.length === VALUE_ZERO) return false;
      else stack.pop();
    }
  }
  return stack.length === VALUE_ZERO;
};

function trimExpression(...expression) {
  let result = expression.filter(item => item !== '');
  result = result.map(item => isNaN(+item) ? item : +item);

  return result;
}

const getResult = (tempResult, expression, operation, value) => {
  let calculationValue;

  if (tempResult) {
    calculationValue = trimExpression(tempResult, operation, value);
  } else {
    calculationValue = trimExpression(expression, operation, value);
  }

  if (calculationValue.length < 3) return;
  const { result } = calculation(calculationValue);

  return result;
}

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
      dispatch(setCurrentValue(value.indexOf('-') === VALUE_ZERO ? value.slice(1, value.length) : '-' + value));
      break;
    }
    case '(': {
      dispatch(setExpression(key, expression + ' ' + convertExpression(value + key)));
      break;
    }
    case ')': {
      if (!expression.includes('(') || !value.match(numbers)) return;
      dispatch(setExpression(key, expression + ' ' + convertExpression(value + ' ' + key)));
      break;
    }
    case '=': {
      try {
        if (expression !== EMPTY_STRING && value.match(numbers)) {
          if (value === '0') value = '';
          const result = getResult(tempResult, expression, operation, value);
          // предыдущий расчет плюс текущий математический знак и текущиее value
          //dispatch(setResultCalculation(result, getResultExpression(result, result, operation, value))); 
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
          dispatch(setCurrentValue(convertExpression(value + key)));
        }
        // input operations
        if (mathOperators.includes(key)) {
          if (value.match(numbers)) {
            const result = getResult(tempResult, expression, operation, value);

            dispatch(setExpression(operation, trimExpression(expression, operation, value).join(' ')));
            dispatch(setTempResult(result));
          }

          dispatch(changeOperator(key));
          if (!checkBracketBalanced(expression + value)) {
            console.log('Brackets are not balanced!');
          }
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    }
  }
}
