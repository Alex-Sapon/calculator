import { combineReducers, legacy_createStore as createStore } from 'redux';
import { appReducer } from '@store/reducers/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
})

export const store = createStore(rootReducer);

window.store = store;
