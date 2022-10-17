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

export const calculation = (currentValue, operation) => {
  if (currentValue === VALUE_NULL && operation === VALUE_NULL) {
    calculator.reset();
    return;
  }

  if (isNaN(currentValue)) return;

  try {
    calculator.execute(getCommand(currentValue, operation));

    if (Number.isFinite(calculator.value)) {
      // if value with dot, return value with 3 digits after dot
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
