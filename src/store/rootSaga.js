import { all } from 'redux-saga/effects';
import { userWatcher } from './user/sagas';

export function* rootSaga() {
  console.log('test me');
  yield all([
    userWatcher(),
  ]);
};
