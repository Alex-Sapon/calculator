class Calculator {
  constructor() {
    this.value = '';
    this.history = [];
  }

  execute(command) {
    this.currentValue = command.execute(this.currentValue);
    this.history.push(command);
  }

  undo() {
    if (this.history.length === 0) return;

    const lastCommand = this.history.pop();
    this.currentValue = lastCommand.undo(this.currentValue);
  }

  getCurrentValue() {
    return this.currentValue;
  }
}

class AddCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return this.value + currentValue;
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

class ResetCommand {
  constructor(value) {
    this.value = value;
  }

  execute() {
    return this.value;
  }
}

export {
  Calculator,
  AddCommand,
  MultiplyCommand,
  DivideCommand,
  ResetCommand,
};

const calculator = new Calculator();

function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }


