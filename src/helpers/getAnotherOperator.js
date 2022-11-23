export const getAnotherOperator = (expression, operation, key) => {
  const exp = expression.split(' ');
  const indexOfOperator = exp.lastIndexOf(operation);
  exp.splice(indexOfOperator, 1, key);

  return exp.join(' ');
};
