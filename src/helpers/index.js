import {
  setCurrentValue,
  setExpression,
  setResultCalculation,
  clearDisplay,
  setPlusOrMinus, sliceLastLetter,
} from '@store/actions';
import { calculation } from '@utils/calculator';
import { digits, mathOperators } from '@constants/operations';
import { EMPTY_STRING, VALUE_ZERO } from '@constants/empty';

export const keypadHandler = (event, currentValue, expression, operation, dispatch) => {
  const innerValue = event.currentTarget.innerText;

  const numbers = /[0-9]/g;
  const digitValue = +Number.parseFloat(currentValue).toFixed(3);

  try {
    switch (innerValue) {
      case 'C': {
        dispatch(sliceLastLetter(currentValue.slice(0, currentValue.length - 1)));
        break;
      }
      case 'CE': {
        dispatch(clearDisplay());
        calculation(null, null);
        break;
      }
      case '-/+': {
        dispatch(setPlusOrMinus(currentValue.indexOf('-') === VALUE_ZERO ? currentValue.slice(1, currentValue.length) : '-' + currentValue));
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
          dispatch(setResultCalculation(calculationValue.toString(), `${expression} ${currentValue} = ${calculationValue}`));

          calculation(null, null);
        }
        break;
      }
      default: {
        if (digits.includes(innerValue)) {
          if (innerValue === '.' && currentValue.includes('.')) return;

          // if (innerValue.indexOf('.') === 0) {
          //   console.log(innerValue)
          //   dispatch(setCurrentValue(innerValue));
          // }

          dispatch(setCurrentValue(innerValue));
        }

        if (mathOperators.includes(innerValue) && currentValue.match(numbers)) {
          if (innerValue.indexOf('.') === 0) {
            console.log('lll')
          }

          dispatch(setExpression(innerValue, `${currentValue} ${innerValue}`));
          calculation(digitValue, innerValue);
        }
      }
    }
  } catch (error) {
    dispatch(setCurrentValue(error.message));
  }
}
