import {
  CLEAR_ALL,
  CLEAR_DISPLAY,
  SET_CURRENT_VALUE,
  SET_ERROR,
  SET_EXPRESSION,
  SET_RESULT_CALCULATION
} from '@store/actions';

const initialState = {
  currentValue: '0',
  expression: '',
  operation: '',
  result: '',
  history: [],
  error: null,
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_VALUE:
      return {
        ...state,
        result: '',
        currentValue: payload.value,
        error: null,
      }
    case SET_EXPRESSION:
      return {
        ...state,
        operation: payload.operation,
        expression: payload.expression,
        currentValue: '0',
      }
    case SET_RESULT_CALCULATION:
      return {
        ...state,
        history: [
          payload.history,
          ...state.history,
        ],
        result: payload.value,
        currentValue: '',
        expression: '',
      }
    case CLEAR_DISPLAY:
      return {
        ...state,
        currentValue: '0',
        expression: '',
        operation: '',
        result: '',
        error: null,
      }
    case CLEAR_ALL:
      return {
        ...state,
        currentValue: '0',
        expression: '',
        operation: '',
        result: '',
        history: [],
        error: null,
      }
    case SET_ERROR:
      return {
        ...state,
        currentValue: '0',
        expression: '',
        operation: '',
        result: '',
        error: payload.value,
      }
    default:
      return state;
  }
}
