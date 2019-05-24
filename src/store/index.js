import { createStore, combineReducers } from 'redux';
import { user } from './user';

const rootReducers = combineReducers({
  user
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
