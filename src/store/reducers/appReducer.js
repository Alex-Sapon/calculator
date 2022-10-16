import {
  CLEAR_DISPLAY,
  SET_PREV_VALUE,
  SET_CURRENT_VALUE,
  SET_CURRENT_OPERATION,
  SET_RESULT_CALCULATION, CLEAR_ALL
} from '@store/actions';

const initialState = {
  previousValue: '',
  currentValue: '',
  previousOperation: '',
  currentOperation: '',
  operation: '',
  result: '',
  history: [],
}

export const appReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_VALUE:
      return {
        ...state,
        result: '',
        currentValue: state.currentValue + payload.value,
      }
    case SET_PREV_VALUE:
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1),
      }
    case SET_CURRENT_OPERATION:
      return {
        ...state,
        currentOperation: payload.currentOperation,
        previousOperation: payload.currentOperation,
        previousValue: `${state.previousValue} ${state.currentValue} ${payload.currentOperation}`,
        currentValue: '',
      }
    case SET_RESULT_CALCULATION:
      return {
        ...state,
        history: [
          `${state.previousValue} ${state.currentValue} = ${payload.resultCalculation}`,
          ...state.history,
        ],
        result: payload.resultCalculation,
        currentValue: '',
        previousValue: '',
      }
    case CLEAR_DISPLAY:
      return {
        ...state,
        previousValue: '',
        currentValue: '',
        previousOperation: '',
        currentOperation: '',
        operation: '',
        result: '',
      }
    case CLEAR_ALL:
      return {
        ...state,
        previousValue: '',
        currentValue: '',
        previousOperation: '',
        currentOperation: '',
        operation: '',
        result: '',
        history: [],
      }
    default:
      return state;
  }
}
