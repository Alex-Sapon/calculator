class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  execute(command) {
    this.value = command.execute();
    this.history.push(command);
  }

  getState() {
    return {
      value: this.value,
      history: this.history,
    };
  }

  reset() {
    this.value = 0;
    this.history = [];
  }
}

class AddCommand {
  constructor(prevValue, nextValue) {
    this.prevValue = prevValue;
    this.nextValue = nextValue;
  }

  execute() {
    return this.prevValue + this.nextValue;
  }
}

class SubtractCommand {
  constructor(prevValue, nextValue) {
    this.prevValue = prevValue;
    this.nextValue = nextValue;
  }

  execute() {
    return this.prevValue - this.nextValue;
  }
}

class MultiplyCommand {
  constructor(prevValue, nextValue) {
    this.prevValue = prevValue;
    this.nextValue = nextValue;
  }

  execute() {
    return this.prevValue * this.nextValue;
  }
}

class DivideCommand {
  constructor(prevValue, nextValue) {
    this.prevValue = prevValue;
    this.nextValue = nextValue;
  }

  execute() {
    return this.prevValue / this.nextValue;
  }
}

class RemainderDivideCommand {
  constructor(prevValue, nextValue) {
    this.prevValue = prevValue;
    this.nextValue = nextValue;
  }

  execute() {
    return this.prevValue % this.nextValue;
  }
}

const calculator = new Calculator();

export const calculation = expression => {
  const tempStack = [...expression];
  const numberStack = [];
  const operatorStack = [];

  const priority = { '*': 2, '/': 2, '%': 2, '+': 1, '-': 1 };

  try {
    // создать команду со значениями из стека
    const createCommand = () => {
      let nextNumber;
      let prevNumber;
      const operator = operatorStack.pop();

      if (!numberStack[numberStack.length - 1]) {
        numberStack.pop();
        nextNumber = numberStack.pop();
        prevNumber = numberStack.pop();
      } else {
        nextNumber = numberStack.pop();
        prevNumber = numberStack.pop();
      }

      // eslint-disable-next-line default-case
      switch (operator) {
        case '+':
          calculator.execute(new AddCommand(prevNumber, nextNumber));
          break;
        case '-':
          calculator.execute(new SubtractCommand(prevNumber, nextNumber));
          break;
        case '*':
          calculator.execute(new MultiplyCommand(prevNumber, nextNumber));
          break;
        case '/':
          calculator.execute(new DivideCommand(prevNumber, nextNumber));
          break;
        case '%':
          calculator.execute(new RemainderDivideCommand(prevNumber, nextNumber));
      }

      numberStack.push(calculator.getState().value);
    };

    // если оператор не равен последнему оператору из operatorStack, то создать команду
    const runCommand = operator => {
      while (operatorStack[operatorStack.length - 1] !== operator) {
        createCommand();
      }
      operatorStack.pop();
    };

    const runCalculation = () => {
      let i = 0;

      while (i < tempStack.length) {
        // если value не число
        while (typeof tempStack[i] === 'string') {
          if (tempStack[i] === ')') {
            runCommand('(');
            i += 1;

            // проверить приоритет операции
            // если приоритет текущего оператора меньше последнего оператора в operatorStack, то выполнить команду
            while (priority[tempStack[i]] < priority[operatorStack[operatorStack.length - 1]]) {
              createCommand();
            }
          } else {
            operatorStack.push(tempStack[i]);
            i += 1;
          }
        }
        // иначе value number
        numberStack.push(tempStack[i]);
        i += 1;

        // если последний оператор в operatorStack не равен '('
        if (operatorStack[operatorStack.length - 1] !== '(') {
          // пока приоритет текущего оператора меньше последнего оператора в operatorStack, создавать команду
          while (priority[tempStack[i]] < priority[operatorStack[operatorStack.length - 1]]) {
            createCommand();
          }
        } else if (tempStack[i] !== ')') {
          operatorStack.push(tempStack[i]);
          i += 1;
        }
      }

      // остановить создание команд и извлечь результат выражения из numberStack
      runCommand(undefined);
      numberStack.pop();
    };

    runCalculation();
    const { value } = calculator.getState();

    return {
      result: Number.isInteger(value) ? value.toString() : value.toFixed(3),
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error into core of calculatorFC: ', error.message);
  }
};
