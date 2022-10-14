const initialState = {
  prevValue: '',
  currentValue: '',
  expression: '',
  operation: '',
  history: [],
}

export const appReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
}
