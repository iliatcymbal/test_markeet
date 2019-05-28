import { createStore, combineReducers } from 'redux';
import { user } from './user';
import { products } from './products';
import { categories, info } from './categories';
import { status } from './status';

const rootReducers = combineReducers({
  user,
  products,
  categories,
  info,
  status,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
