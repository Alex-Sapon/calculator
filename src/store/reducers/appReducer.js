import { 
  CHANGE_THEME, 
  CHANGE_VISIBLE_HISTORY, 
  SET_ERROR,
  CLEAR_ALL, 
  CLEAR_DISPLAY, 
} from '@store/constants';

const initialState = {
  isShow: true,
  theme: 'light',
  error: null,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_VISIBLE_HISTORY:
      return {
        ...state,
        isShow: payload.value,
      };
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
    case CLEAR_ALL:
    case CLEAR_DISPLAY:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
