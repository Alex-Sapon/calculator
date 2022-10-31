export function trimExpression(...expression) {
  let result = expression.filter(item => item !== '');
  result = result.map(item => isNaN(+item) ? item : +item);

  return result;
}