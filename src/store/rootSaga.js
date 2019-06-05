import { all } from 'redux-saga/effects';
import { userWatcher } from './user/sagas';

export function* rootSaga() {
  yield all([
    userWatcher(),
  ]);
}
