import { CHANGE_THEME, SET_ERROR } from '@store/constants';

const initialState = {
  error: null,
  theme: 'light',
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: payload.value,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload.value,
      };
    default:
      return state;
  }
};
