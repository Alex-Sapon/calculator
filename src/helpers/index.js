import { clearDisplay, setCurrentValue, setError, setExpression, setResultCalculation } from '@store/actions';
import { calculation } from '@utils/calculator';
import { digits, mathOperators } from '@constants/operations';
import { EMPTY_STRING, VALUE_ZERO } from '@constants/empty';

const getCorrectlyExpression = value => {
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

const getResultExpression = (result, ...operands) => operands.join(' ') + ' = ' + result;

const checkBracketBalanced = expression => {
  let stack = [];

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

export const keypadHandler = (event, currentValue, expression, operation, dispatch) => {
  const key = event.currentTarget.textContent;

  const numbers = /[0-9]/g;

  switch (key) {
    case 'C': {
      if (currentValue !== '0' && currentValue.length !== 1) {
        dispatch(setCurrentValue(currentValue.slice(0, currentValue.length - 1)));
      } else {
        dispatch(setCurrentValue('0'));
      }
      break;
    }
    case 'CE': {
      dispatch(clearDisplay());
      calculation(null);
      break;
    }
    case '-/+': {
      dispatch(setCurrentValue(currentValue.indexOf('-') === VALUE_ZERO ? currentValue.slice(1, currentValue.length) : '-' + currentValue));
      break;
    }
    case '(': {
      // dispatch(setCurrentValue(innerValue));
      dispatch(setExpression(key, expression + ' ' + getCorrectlyExpression(currentValue + key)));
      break;
    }
    case ')': {
      if (!expression.includes('(') || !currentValue.match(numbers)) return;
      dispatch(setExpression(key, expression + ' ' + getCorrectlyExpression(currentValue + ' ' + key)));
      break;
    }
    case '=': {
      try {
        if (expression !== EMPTY_STRING && currentValue.match(numbers)) {
          const result = calculation((expression.slice(1, -1) + operation + ' ' + currentValue).split(' '));
          dispatch(setResultCalculation(result, getResultExpression(result, expression, currentValue)));
          calculation(null);
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
          if (currentValue.length > 12) return;
          if (key === '.' && currentValue.includes('.')) return;
          dispatch(setCurrentValue(getCorrectlyExpression(currentValue + key)));
        }

        // input operations
        if (mathOperators.includes(key) && currentValue.match(numbers) && currentValue !== '0') {
          dispatch(setExpression(key, expression + ' ' + getCorrectlyExpression(currentValue + ' ' + key)));
          dispatch(setCurrentValue('0'));
        }

        if (!checkBracketBalanced(expression + currentValue)) {
          console.log('Brackets are not balanced!');
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    }
  }
}
