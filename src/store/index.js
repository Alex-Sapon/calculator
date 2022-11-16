import { combineReducers, compose, legacy_createStore as createStore } from 'redux';

import { appReducer, calcReducer } from '@store/reducers';
import { loadState, saveState } from '@utils/localStorage';

const rootReducer = combineReducers({
  application: appReducer,
  calculator: calcReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, loadState(), composeEnhancers());

store.subscribe(() => {
  saveState(
    store.getState(),
  );
});
