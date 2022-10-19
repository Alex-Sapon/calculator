import {
  CLEAR_DISPLAY,
  SET_CURRENT_VALUE,
  SET_PLUS_OR_MINUS,
  SLICE_LAST_LETTER,
  SET_EXPRESSION,
  SET_RESULT_CALCULATION, CLEAR_ALL,
} from '@store/actions';

const initialState = {
  expression: '',
  currentValue: '',
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
        currentValue: state.currentValue + payload.value,
      }
    case SLICE_LAST_LETTER:
      return {
        ...state,
        currentValue: payload.value,
      }
    case SET_EXPRESSION:
      return {
        ...state,
        operation: payload.operation,
        expression: payload.expression,
        currentValue: '',
      }
    case SET_PLUS_OR_MINUS: {
      return {
        ...state,
        currentValue: payload.value,
      }
    }
    case SET_RESULT_CALCULATION:
      return {
        ...state,
        history: [
          payload.history,
          ...state.history,
        ],
        // result: payload.value,
        currentValue: payload.value,
        expression: '',
      }
    case CLEAR_DISPLAY:
      return {
        ...state,
        expression: '',
        currentValue: '',
        operation: '',
        result: '',
      }
    case CLEAR_ALL:
      return {
        ...state,
        expression: '',
        currentValue: '',
        operation: '',
        result: '',
        history: [],
      }
    default:
      return state;
  }
}
