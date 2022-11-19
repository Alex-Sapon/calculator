import {
  CHANGE_OPERATOR,
  CLEAR_ALL,
  CLEAR_DISPLAY,
  SET_CURRENT_VALUE,
  SET_EXPRESSION,
  SET_RESULT_CALCULATION,
  SET_TEMP_RESULT,
} from '@store/constants';

const initialState = {
  value: '0',
  expression: '',
  operation: '',
  result: '',
  tempResult: '',
  history: [],
};

export const calcReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_VALUE:
      return {
        ...state,
        result: '',
        value: payload.value,
      };
    case SET_TEMP_RESULT:
      return {
        ...state,
        value: '',
        result: payload.value,
        tempResult: payload.value,
      };
    case SET_EXPRESSION:
      return {
        ...state,
        value: '',
        expression: payload.value,
      };
    case CHANGE_OPERATOR:
      return {
        ...state,
        operation: payload.value,
      };

    case SET_RESULT_CALCULATION:
      return {
        ...state,
        history: [
          { id: payload.id, historyItem: payload.history },
          ...state.history,
        ],
        result: payload.value,
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        value: '0',
        expression: '',
        operation: '',
        result: '',
        tempResult: '',
      };
    case CLEAR_ALL:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
