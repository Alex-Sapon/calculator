import { VALUE_NULL } from '@constants/empty';

class Calculator {
  constructor() {
    this.previousValue = 0;
    this.currentValue = 0;
    this.history = [];
  }

  execute(command) {
    this.previousValue = this.currentValue;
    this.currentValue = command.execute(this.previousValue);
    this.history.push(command);
  }

  reset() {
    this.previousValue = 0;
    this.currentValue = 0;
    this.history = [];
  }
}

class AddCommand {
  constructor(currentValue) {
    this.currentValue = currentValue;
  }

  execute(previousValue) {
    return previousValue + this.currentValue;
  }
}

class SubtractCommand {
  constructor(currentValue) {
    this.currentValue = currentValue;
  }

  execute(previousValue) {
    return previousValue - this.currentValue;
  }
}

class MultiplyCommand {
  constructor(currentValue) {
    this.currentValue = currentValue;
  }

  execute(previousValue) {
    return previousValue * this.currentValue;
  }
}

class DivideCommand {
  constructor(currentValue) {
    this.currentValue = currentValue;
  }

  execute(previousValue) {
    return previousValue / this.currentValue;
  }
}

const calculator = new Calculator();

export const calculation = expression => {
  if (expression === VALUE_NULL) {
    calculator.reset();
    return;
  }

  try {
    helper(expression, 0);

    function helper(stack, index) {
      const tempStack = [];
      let operator = '+';
      let number = 0;

      for (let i = index; i < stack.length; i++) {
        let currentValue = stack[i];
        if (currentValue >= '0' && currentValue <= '9') {
          number = number * 10 + (currentValue - '0');
        }

        if (!(currentValue >= '0' && currentValue <= '9') || i === stack.length - 1) {
          if (currentValue === '(') {
            number = helper(stack, i + 1);
            let left = 1;
            let right = 0;

            for (let j = i + 1; j < stack.length; j++) {
              if (stack[j] === ')') {
                right++;
                if (right === left) {
                  i = j;
                  break;
                }
              } else if (stack[j] === '(') left++;
            }
          }

          let previous = -1;

          switch (operator) {
            case '+':
              tempStack.push(number);
              //calculator.execute(new AddCommand(tempStack.pop()));
              break;
            case '-':
              //tempStack.push(number * -1);
              calculator.execute(new SubtractCommand(number));
              break;
            case '*':
              previous = tempStack.pop();
              tempStack.push(previous * number);
              calculator.execute(new MultiplyCommand(number));
              break;
            case '/':
              previous = tempStack.pop();
              tempStack.push(previous / number);
              calculator.execute(new DivideCommand(number));
              break;
            default:
              return 0;
          }

          operator = currentValue;
          number = 0;
          if (currentValue === ')') break;
        }
      }

      while (tempStack.length > 0) {
        calculator.execute(new AddCommand(tempStack.pop()));
      }
    }

    if (Number.isFinite(calculator.currentValue)) {
      if (!Number.isInteger(calculator.currentValue)) return calculator.currentValue.toFixed(3);

      return calculator.currentValue;
    } else {
      return 'Error';
    }
  } catch (error) {
    console.log('Error into core of calculator: ', error.message);
  }
}
