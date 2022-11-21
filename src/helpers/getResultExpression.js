import { numberWithCommas } from '@helpers/numberWithCommas';

export const getResultExpression = (result, ...operands) => {
  let toStringExpression = '';
  const expression = operands.map(item => !Number.isNaN(item) ? numberWithCommas(item) : item);

  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] < 0 && expression[i - 1] && Number.isNaN(Number(expression[i - 1]))) {
      toStringExpression += `(${expression[i]})`;
    } else {
      toStringExpression += `${expression[i]} `;
    }
  }
  
  return `${toStringExpression} = ${numberWithCommas(result)}`;
};
