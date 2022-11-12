export const selectExpression = state => state.calculator.expression;
export const selectValue = state => state.calculator.value;
export const selectOperation = state => state.calculator.operation;
export const selectResult = state => state.calculator.result;
export const selectHistory = state => state.calculator.history;
export const selectTempResult = state => state.calculator.tempResult;

export const selectTheme = state => state.application.theme;
export const selectIsShow = state => state.application.isShow;
