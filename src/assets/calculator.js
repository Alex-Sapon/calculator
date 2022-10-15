const LENGTH_ZERO = 0;
const EMPTY_STRING = '';

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
    if (this.history.length === LENGTH_ZERO) return;

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
    return this.value - currentValue;
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
    return this.value * currentValue;
  }

  undo(currentValue) {
    return this.value / currentValue;
  }
}

class DivideCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return this.value / currentValue;
  }

  undo(currentValue) {
    return this.value * currentValue;
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

export const calculation = (currentValue, operation, reset) => {
  const value = parseFloat(currentValue);

  if (reset) {
    calculator.reset();
  }

  if (isNaN(value)) return;

  try {
    calculator.execute(chooseCommand(value, operation));
    return calculator.value;
  } catch (e) {
    console.log('Some error into core of calculator: ', e.message);
  }
}


