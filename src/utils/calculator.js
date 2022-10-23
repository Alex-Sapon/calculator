import { VALUE_NULL, VALUE_ZERO } from '@constants/empty';

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

  undo() {
    if (this.history.length === VALUE_ZERO) return;

    const lastCommand = this.history.pop();
    this.value = lastCommand.undo(this.value);
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

  undo(currentValue) {
    return currentValue - this.currentValue;
  }
}

class SubtractCommand {
  constructor(currentValue) {
    this.currentValue = currentValue;
  }

  execute(previousValue) {
    return previousValue - this.currentValue;
  }

  undo(previousValue) {
    return this.currentValue + previousValue;
  }
}

class MultiplyCommand {
  constructor(currentValue) {
    this.currentValue = currentValue;
  }

  execute(previousValue) {
    return previousValue * this.currentValue;
  }

  undo(previousValue) {
    return previousValue / this.currentValue;
  }
}

class DivideCommand {
  constructor(currentValue) {
    this.currentValue = currentValue;
  }

  execute(previousValue) {
    return previousValue / this.currentValue;
  }

  undo(previousValue) {
    return previousValue * this.currentValue;
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
            let l = 1, r = 0;

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

          switch (operator) {
            case '+':
              tempStack.push(number);
              break;
            case '-':

              tempStack.push(number);
              calculator.execute(new SubtractCommand(number));
              console.log(number * -1)
              console.log(calculator.previousValue)
              break;
            case '*':
              pre = tempStack.pop();
              tempStack.push(pre * number);
              calculator.execute(new MultiplyCommand(number));
              break;
            case '/':
              pre = tempStack.pop();
              tempStack.push(pre / number);
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
        calculator.execute(new AddCommand(tempStack.pop()))
      }
    }

    console.log(calculator.currentValue)
    console.log(calculator.history)

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
