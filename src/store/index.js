import { combineReducers, legacy_createStore as createStore } from 'redux';

import { appReducer } from '@store/reducers/appReducer';
import { loadState, saveState } from '@utils/localStorage';

const rootReducer = combineReducers({
  appReducer,
});

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState(
    store.getState(),
  );
});
