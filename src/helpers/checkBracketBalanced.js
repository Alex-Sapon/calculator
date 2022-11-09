import { VALUE_ZERO } from '@constants/empty';

export const checkBracketBalanced = expression => {
  const stack = [];

  for (let i = 0; i < expression.length; i += 1) {
    const temp = expression[i];

    if (temp === '(') {
      stack.push(temp);
    }

    if (temp === ')') {
      if (stack.length === VALUE_ZERO) return false;
      stack.pop();
    }
  }
  return stack.length === VALUE_ZERO;
};