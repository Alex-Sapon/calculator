import { numberWithCommas } from '@helpers/numberWithCommas';

export const getResultExpression = (result, ...operands) => {
  let expression = operands.map(item => !isNaN(item) ? numberWithCommas(item) : item);
  return expression.join(' ') + ' = ' + numberWithCommas(result);
}
