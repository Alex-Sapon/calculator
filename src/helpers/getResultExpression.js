import { numberWithCommas } from '@helpers';

export const getResultExpression = (result, ...operands) => {
  const expression = operands.map(item => !Number.isNaN(item) ? numberWithCommas(item) : item);
  return `${expression.join(' ')} = ${numberWithCommas(result)}`;
};
