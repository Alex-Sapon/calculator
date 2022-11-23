import { numberWithCommas } from '@helpers/numberWithCommas';

export const finallyExpression = (result, ...operands) => {
  let toStringExpression = '';
  const arrExp = [];

  operands.forEach(item => {
    if (!Number.isNaN(item)) {
      if (item.length > 1) item.split(' ').forEach(elem => 
        Number.isNaN(Number(elem)) ? arrExp.push(elem) : arrExp.push(+elem));
      else arrExp.push(numberWithCommas(item));
    }
    return item;
  });

  for (let i = 0; i < arrExp.length; i += 1) {
    if (arrExp[i] < 0 && arrExp[i - 1] && Number.isNaN(Number(arrExp[i - 1]))) {
      toStringExpression += `(${arrExp[i]}) `;
    } else {
      toStringExpression += `${arrExp[i]} `;
    }
  }
  
  return `${toStringExpression} = ${numberWithCommas(result)}`;
};
