import {
  CHANGE_OPERATOR,
  CHANGE_THEME,
  CLEAR_ALL,
  CLEAR_DISPLAY,
  SET_CURRENT_VALUE,
  SET_ERROR,
  SET_EXPRESSION,
  SET_RESULT_CALCULATION,
  SET_TEMP_RESULT,
  CHANGE_VISIBLE_HISTORY,
  CHANGE_VIEW_MODE,
} from '@store/constants';

export const setCurrentValue = value => ({ type: SET_CURRENT_VALUE, payload: { value } });
export const setResultCalculation = (value, history, id) => ({ type: SET_RESULT_CALCULATION, payload: { value, history, id } });
export const setTempResult = value => ({ type: SET_TEMP_RESULT, payload: { value } });
export const changeOperator = value => ({ type: CHANGE_OPERATOR, payload: { value } });
export const clearDisplay = () => ({ type: CLEAR_DISPLAY });
export const clearAll = () => ({ type: CLEAR_ALL });
export const setExpression = (operation, expression) => ({ type: SET_EXPRESSION, payload: { operation, expression } });
export const setError = value => ({ type: SET_ERROR, payload: { value } });
export const setTheme = value => ({ type: CHANGE_THEME, payload: { value } });
export const changeVisibleHistory = value => ({ type: CHANGE_VISIBLE_HISTORY, payload: { value } });
export const changeViewMode = value => ({ type: CHANGE_VIEW_MODE, payload: { value } });
