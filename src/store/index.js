import { combineReducers, legacy_createStore as createStore } from 'redux';

import { appReducer, calcReducer } from '@store/reducers';
import { loadState, saveState } from '@utils/localStorage';

const rootReducer = combineReducers({
  application: appReducer,
  calculator: calcReducer,
});

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState(
    store.getState(),
  );
});
