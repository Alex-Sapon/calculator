import {
  CLEAR_DISPLAY,
  SET_CURRENT_VALUE,
  SET_EXPRESSION,
  SET_RESULT_CALCULATION,
  CLEAR_ALL,
} from '@store/actions';

const initialState = {
  currentValue: '0',
  expression: '',
  operation: '',
  result: '',
  history: [],
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_VALUE:
      return {
        ...state,
        result: '',
        currentValue: payload.value,
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
      }
    case CLEAR_ALL:
      return {
        ...state,
        currentValue: '0',
        expression: '',
        operation: '',
        result: '',
        history: [],
      }
    default:
      return state;
  }
}
