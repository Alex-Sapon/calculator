import { EMPTY_VALUE, VALUE_ZERO } from '@constants/empty';

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

const calculator = new Calculator();

const chooseCommand = (value, operation) => {
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

export const calculation = (currentValue, operation) => {
  if (currentValue === EMPTY_VALUE && operation === EMPTY_VALUE) {
    calculator.reset();
    return;
  }

  if (isNaN(currentValue)) return;

  try {
    calculator.execute(chooseCommand(currentValue, operation));

    // if value with dot, return value with 3 digits after dot
    if (calculator.value % 2 !== VALUE_ZERO) {
      return +calculator.value.toFixed(3);
    }

    return calculator.value;
  } catch (e) {
    console.log('Error into core of calculator: ', e.message);
  }
}
