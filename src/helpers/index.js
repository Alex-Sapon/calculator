import { clearDisplay, setCurrentValue, setError, setExpression, setResultCalculation } from '@store/actions';
import { calculation } from '@utils/calculator';
import { digits, mathOperators } from '@constants/operations';
import { EMPTY_STRING, VALUE_ZERO } from '@constants/empty';

const setZeroBeforeDot = value => value.indexOf('.') === 0 ? '0' + value : value;

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
  const innerValue = event.currentTarget.innerText;

  const numbers = /[0-9]/g;
  const digitValue = +Number.parseFloat(currentValue).toFixed(3);

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
      dispatch(setCurrentValue(innerValue));
      break;
    }
    case ')': {
      if (!expression.includes('(') || !currentValue.match(numbers)) return;

      dispatch(setExpression(innerValue, expression + ' ' + setZeroBeforeDot(currentValue) + innerValue));
      break;
    }
    case '=': {
      try {
        if (expression !== EMPTY_STRING && currentValue.match(numbers)) {
          const resultCalculation = calculation(digitValue, operation);
          dispatch(setResultCalculation(resultCalculation.toString(), getResultExpression(resultCalculation, expression, currentValue)));

          calculation(null, null);
        }
      } catch (error) {
        dispatch(setError(error.message))
      }
      break;
    }
    default: {
      try {
        if (digits.includes(innerValue)) {
          if (innerValue === '.' && currentValue.includes('.')) return;
          dispatch(setCurrentValue(setZeroBeforeDot(currentValue) + innerValue));
        }

        if (mathOperators.includes(innerValue) && currentValue.match(numbers)) {
          dispatch(setExpression(innerValue, expression + ' ' + setZeroBeforeDot(currentValue) + ' ' + innerValue));
          calculation(digitValue, innerValue);
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
