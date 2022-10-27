export const SET_CURRENT_VALUE = 'SET_CURRENT_VALUE';
export const SET_RESULT_CALCULATION = 'SET_RESULT_CALCULATION';
export const SET_TEMP_RESULT = 'SET_TEMP_RESULT';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const CHANGE_OPERATOR = 'CHANGE_OPERATOR';
export const CLEAR_ALL = 'CLEAR_ALL';
export const SET_EXPRESSION = 'SET_CURRENT_OPERATION';
export const SET_ERROR = 'SET_ERROR';

export const setCurrentValue = (value) => ({ type: SET_CURRENT_VALUE, payload: { value } });
export const setResultCalculation = (value, history) => ({ type: SET_RESULT_CALCULATION, payload: { value, history } });
export const setTempResult = (value) => ({ type: SET_TEMP_RESULT, payload: { value } });
export const changeOperator = (value) => ({ type: CHANGE_OPERATOR, payload: { value } });
export const clearDisplay = () => ({ type: CLEAR_DISPLAY });
export const clearAll = () => ({ type: CLEAR_ALL });
export const setExpression = (operation, expression) => ({ type: SET_EXPRESSION, payload: { operation, expression } });
export const setError = (error) => ({ type: SET_ERROR, payload: { error } });
