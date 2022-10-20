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

export const calculation = (expression, operation) => {
  if (expression === VALUE_NULL && operation === VALUE_NULL) {
    calculator.reset();
    return;
  }

  if (isNaN(expression)) return;

  try {
    calculator.execute(getCommand(expression, operation));

    if (Number.isFinite(calculator.value)) {
      if (!Number.isInteger(calculator.value)) {
        return calculator.value.toFixed(3);
      }

      return calculator.value;
    } else {
      return 'Can\'t divide with 0';
    }
  } catch (e) {
    console.log('Error into core of calculator: ', e.message);
  }
}


function evaluation(expression) {
  expression = expression.replace(/\s/g, '');
  return helper(Array.from(expression), 0);
}

function helper(stack, index) {
  const stk = [];
  let sign = '+';
  let num = 0;

  for (let i = index; i < stack.length; i++) {
    let c = stack[i];
    if (c >= '0' && c <= '9') {
      num = num * 10 + (c - '0');
    }

    if (!(c >= '0' && c <= '9') || i === stack.length - 1) {
      if (c === '(') {
        num = helper(stack, i + 1);
        let l = 1;
        let r = 0;

        for (let j = i + 1; j < stack.length; j++) {
          if (stack[j] === ')') {
            r++;
            if (r === l) {
              i = j;
              break;
            }
          } else if (stack[j] === '(') l++;
        }
      }

      let pre = -1;

      switch (sign) {
        case '+':
          stk.push(num);
          //calculator.execute(new AddCommand(num));
          break;
        case '-':
          stk.push(num * -1);
          calculator.execute(new SubtractCommand(num));
          break;
        case '*':
          pre = stk.pop();
          stk.push(pre * num);
          calculator.execute(new MultiplyCommand(num));
          //calculator.execute(new MultiplyCommand(num));
          break;
        case '/':
          pre = stk.pop();
          stk.push(pre / num);
          calculator.execute(new DivideCommand(pre));
          //calculator.execute(new DivideCommand(num));
          break;
      }

      sign = c;
      num = 0;
      if (c === ')') break;
    }
  }

  console.log(calculator.history);
  return calculator.value;
}

console.log(evaluation('2*2-2'))
