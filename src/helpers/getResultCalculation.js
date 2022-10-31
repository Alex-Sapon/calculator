import { calculation } from '@utils/calculator';
import { trimExpression } from '@helpers/trimExpression';

export const getResultCalculation = (tempResult, expression, operation, value) => {
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
