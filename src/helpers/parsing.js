export function parsing(...expression) {
  let result;

  if (expression.length === 1 && expression[0].match(/[0-9]/g)) {
    result = expression[0].split(' ');
  } else {
    result = expression.filter(elem => elem !== '');
  }

  return result.map(elem => Number.isNaN(Number(elem)) ? elem : +elem);
}
