import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { user } from './user';
import { products } from './products';
import { categories, info } from './categories';
import { status } from './status';
import { rootSaga } from './rootSaga';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  user,
  products,
  categories,
  info,
  status,
});

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export const dispatch = store.dispatch.bind(store);

sagaMiddleware.run(rootSaga);
