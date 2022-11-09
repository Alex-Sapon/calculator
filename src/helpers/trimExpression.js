export function trimExpression(...expression) {
  let result = expression.filter(item => item !== '');
  result = result.map(item => Number.isNaN(+item) ? item : +item);

  return result;
}