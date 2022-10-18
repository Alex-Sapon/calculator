export const SET_CURRENT_VALUE = 'SET_CURRENT_VALUE';
export const SET_PREV_VALUE = 'SET_PREV_VALUE';
export const SET_RESULT_CALCULATION = 'SET_RESULT_CALCULATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const SET_PLUS_OR_MINUS = 'SET_PLUS_OR_MINUS';
export const CLEAR_ALL = 'CLEAR_ALL';
export const SET_CURRENT_OPERATION = 'SET_CURRENT_OPERATION';
export const SET_ERROR = 'SET_ERROR';

export const setCurrentValue = (value) => ({type: SET_CURRENT_VALUE, payload: {value}});
export const setPrevValue = (value) => ({type: SET_PREV_VALUE, payload: {value}});
export const setResultCalculation = (value, history) => ({type: SET_RESULT_CALCULATION, payload: {value, history}});
export const setPlusOrMinus = (value) => ({type: SET_PLUS_OR_MINUS, payload: {value}});
export const clearDisplay = () => ({type: CLEAR_DISPLAY});
export const clearAll = () => ({type: CLEAR_ALL});
export const setCurrentOperation = (currentOperation) => ({type: SET_CURRENT_OPERATION, payload: {currentOperation}});
export const setError = (errorMessage) => ({type: SET_ERROR, payload: {errorMessage}});