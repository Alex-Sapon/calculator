import { VALUE_NULL, VALUE_ZERO } from '@constants/empty';

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  execute(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    if (this.history.length === VALUE_ZERO) return;

    const lastCommand = this.history.pop();
    this.value = lastCommand.undo(this.value);
  }

  reset() {
    this.value = 0;
    this.history = [];
  }
}

class AddCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue + this.value;
  }

  undo(currentValue) {
    return currentValue - this.value;
  }
}

class SubtractCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    if (currentValue === VALUE_ZERO) return this.value;
    return currentValue - this.value;
  }

  undo(currentValue) {
    return this.value + currentValue;
  }
}

class MultiplyCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    if (currentValue === VALUE_ZERO) return this.value;
    return this.value * currentValue;
  }

  undo(currentValue) {
    return currentValue / this.value;
  }
}

class DivideCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    if (currentValue === VALUE_ZERO) return this.value;
    return currentValue / this.value;
  }

  undo(currentValue) {
    return currentValue * this.value;
  }
}

const getCommand = (value, operation) => {
  switch (operation) {
    case '+':
      return new AddCommand(value);
    case '-':
      return new SubtractCommand(value);
    case '/':
      return new DivideCommand(value);
    case '*':
      return new MultiplyCommand(value);
    default:
      return 0;
  }
}

const calculator = new Calculator();

// function evaluation(expression) {
//   expression = expression.replace(/\s/g, '');
//   return helper(Array.from(expression), 0);
// }

// function helper(stack, index) {
//   var stk = [];
//   let sign = '+';
//   let num = 0;

//   for (let i = index; i < stack.length; i++) {
//     let c = stack[i];
//     if (c >= '0' && c <= '9') {
//       num = num * 10 + (c - '0');
//     }

//     if (!(c >= '0' && c <= '9') || i === stack.length-1) {
//       if (c === '(') {
//         num = helper(stack, i + 1);
//         let l = 1;
//         let r = 0;

//         for (let j = i+1; j < stack.length; j++) {
//           if (stack[j] === ')') {
//             r++;
//             if (r === l) {
//               i = j; break;
//             }
//           }
//           else if (stack[j] === '(') l++;
//         }
//       }

//       let pre = -1;

//       switch (sign) {
//         case '+':
//           stk.push(num);
//           calculator.execute(getCommand(num, sign));
//           break;
//         case '-':
//           stk.push(num * -1);
//           calculator.execute(getCommand(num, sign));
//           break;
//         case '*':
//           pre = stk.pop();
//           stk.push(pre * num);
//           // console.log('num', num)
//           // console.log('pre', pre)
//           // console.log('sign', sign)
//           calculator.execute(getCommand(num, sign));
//           break;
//         case '/':
//           pre = stk.pop();
//           stk.push(pre / num);
//           //calculator.execute(getCommand(currentValue, operation));
//           break;
//       }

//       sign = c;
//       num = 0;

//       if (c === ')') break;
//     }
//   }

//   let answer = 0;

//   while (stk.length > 0) {
//     answer += stk.pop();
//   }
//   console.log(calculator.value)

//   return answer;
// }

// console.log(evaluation('2+2-2*2'))

export const calculation = (currentValue, operation) => {
  if (currentValue === VALUE_NULL && operation === VALUE_NULL) {
    calculator.reset();
    return;
  }

  if (isNaN(currentValue)) return;

  function evaluation(expression) {
    expression = expression.replace(/\s/g, '');
    return helper(Array.from(expression), 0);
  }
  
  function helper(stack, index) {
    var stk = [];
    let sign = '+';
    let num = 0;

    for (let i = index; i < stack.length; i++) {
      let c = stack[i];
      if (c >= '0' && c <= '9') {
        num = num * 10 + (c - '0');
      }

      if (!(c >= '0' && c <= '9') || i === stack.length-1) {
        if (c === '(') {
          num = helper(stack, i+1);
          let l = 1;
          let r = 0;

          for (let j = i+1; j < stack.length; j++) {
            if (stack[j] === ')') {
              r++;
              if (r === l) {
                i = j; break;
              }
            }
            else if (stack[j] === '(') l++;
          }
        }

        let pre = -1;

        switch (sign) {
          case '+':
            stk.push(num);
            calculator.execute(getCommand(currentValue, operation));
            break;
          case '-':
            stk.push(num * -1);
            calculator.execute(getCommand(currentValue, operation));
            break;
          case '*':
            pre = stk.pop();
            stk.push(pre * num);
            calculator.execute(getCommand(currentValue, operation));
            break;
          case '/':
            pre = stk.pop();
            stk.push(pre / num);
            calculator.execute(getCommand(currentValue, operation));
            break;
        }
        sign = c;
        num = 0;
        if (c === ')') break;
      }
    }

    let answer = 0;

    while (stk.length > 0) {
      answer += stk.pop();
      console.log(answer)
    }
    console.log(calculator)

    return answer;
  }

  try {
    calculator.execute(getCommand(currentValue, operation));

    if (Number.isFinite(calculator.value)) {
      if (!Number.isInteger(calculator.value)) {
        return calculator.value.toFixed(3);
      }

      console.log(calculator)
      return calculator.value;
    } else {
      return 'Can\'t divide with 0';
    }
  } catch (e) {
    console.log('Error into core of calculator: ', e.message);
  }
}
