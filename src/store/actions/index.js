export const SET_CURRENT_VALUE = 'SET_CURRENT_VALUE';
export const SET_PREV_VALUE = 'SET_PREV_VALUE';
export const SET_RESULT_CALCULATION = 'SET_RESULT_CALCULATION';
export const UPDATE_DISPLAY = 'UPDATE_DISPLAY';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const SET_CURRENT_OPERATION = 'SET_CURRENT_OPERATION';

export const actions = {
  setCurrentValue: (value) => ({type: SET_CURRENT_VALUE, payload: {value}}),
  setPrevValue: () => ({type: SET_PREV_VALUE}),
  setResultCalculation: (resultCalculation) => ({type: SET_RESULT_CALCULATION, payload: {resultCalculation}}),
  clearDisplay: () => ({type: CLEAR_DISPLAY}),
  setCurrentOperation: (currentOperation) => ({type: SET_CURRENT_OPERATION, payload: {currentOperation}}),
  updateDisplay: () => ({type: UPDATE_DISPLAY}),
}