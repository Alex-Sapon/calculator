import { parsing } from '@helpers/parsing';
import { calculation } from '@utils/calculator';

export const expressionBuilder = (tempResult, expression, operation, value) => {
  let calculationValue;

  if (tempResult && !value) {
    calculationValue = parsing(tempResult, operation, value);
  } else {
    calculationValue = parsing(expression, value);
  }

  if (calculationValue.length < 3) return;
  const { result } = calculation(calculationValue);

  return result;
};
