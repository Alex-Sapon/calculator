export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('calculator-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('calculator-state', serializedState);
  } catch {
    return undefined;
  }
};
