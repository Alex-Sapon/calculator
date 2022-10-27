import {
  CLEAR_ALL,
  CLEAR_DISPLAY,
  SET_CURRENT_VALUE,
  CHANGE_OPERATOR,
  SET_ERROR,
  SET_EXPRESSION,
  SET_RESULT_CALCULATION, SET_TEMP_RESULT
} from '@store/actions';

const initialState = {
  value: '0',
  expression: '',
  operation: '',
  result: '',
  tempResult: '',
  history: [],
  error: null,
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_VALUE:
      return {
        ...state,
        result: '',
        value: payload.value,
        error: null,
      }
    case SET_EXPRESSION:
      return {
        ...state,
        operation: payload.operation,
        expression: payload.expression,
        value: '',
      }
    case SET_TEMP_RESULT:
      return {
        ...state,
        value: '',
        result: payload.value,
        tempResult: payload.value,
      }
    case CHANGE_OPERATOR:
      return {
        ...state,
        operation: payload.value,
      }
    case SET_RESULT_CALCULATION:
      return {
        ...state,
        history: [
          payload.history,
          ...state.history,
        ],
        result: payload.value,
        operation: '',
        tempResult: '',
        value: '',
        expression: '',
      }
    case CLEAR_DISPLAY:
      return {
        ...state,
        value: '0',
        expression: '',
        tempResult: '',
        operation: '',
        result: '',
        error: null,
      }
    case CLEAR_ALL:
      return {
        ...state,
        value: '0',
        expression: '',
        operation: '',
        result: '',
        tempResult: '',
        history: [],
        error: null,
      }
    case SET_ERROR:
      return {
        ...state,
        value: '0',
        expression: '',
        operation: '',
        result: '',
        error: payload.value,
      }
    default:
      return state;
  }
}
