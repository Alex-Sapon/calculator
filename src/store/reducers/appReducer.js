import {
  CLEAR_DISPLAY,
  SET_PREV_VALUE,
  SET_CURRENT_VALUE,
  UPDATE_DISPLAY,
  SET_CURRENT_OPERAND,
  SET_RESULT_CALCULATION
} from '@store/actions';

const initialState = {
  previousValue: '',
  currentValue: '',
  previousOperand: '',
  currentOperand: '',
  operation: '',
  result: '',
  history: [],
}

export const appReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_VALUE:
      return {
        ...state,
        currentValue: state.currentValue + payload.value,
      }
    case SET_PREV_VALUE:
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1),
      }
    case CLEAR_DISPLAY:
      return {
        ...state,
        previousValue: '',
        currentValue: '',
      }
    case SET_CURRENT_OPERAND:
      return {
        ...state,
        currentOperand: payload.currentOperand,
        previousOperand: payload.currentOperand,
        previousValue: `${state.previousValue} ${state.currentValue} ${payload.currentOperand} `,
        currentValue: '',
      }
    case SET_RESULT_CALCULATION:
      return {
        ...state,
        history: [
          state.previousValue + state.currentValue + ' = ' + payload.resultCalculation,
          ...state.history,
        ],
        currentValue: payload.resultCalculation,
        previousValue: '',
      }
    case UPDATE_DISPLAY:
      return {...state}
    default:
      return state;
  }
}
