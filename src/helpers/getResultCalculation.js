import { parsing } from '@helpers/parsing';
import { calculation } from '@utils/calculator';

export const getResultCalculation = (tempResult, expression, operation, value) => {
  let calculationValue;

  if (tempResult) {
    calculationValue = parsing(tempResult, operation, value);
  } else {
    calculationValue = parsing(expression, operation, value);
  }

  if (calculationValue.length < 3) return;
  const { result } = calculation(calculationValue);

  return result;
};
