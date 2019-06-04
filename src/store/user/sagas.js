import { takeEvery, put, all } from 'redux-saga/effects';

import { setUser, setUserBegin, SET_USER_ASYNC, LOGIN_USER_ASYNC } from './actions';
import { checkUserService, loginUserService } from '../../services/userService';

function* fetchUser() {
  yield put(setUserBegin());
  try {
    const user = yield checkUserService();
    yield put(setUser(user));
  } catch (err) {}
}

function* loginUser(action) {
  yield put(setUserBegin());
  try {
    const user = yield loginUserService(action.data);
    yield put(setUser(user));
  } catch (err) {}
}

  export function* userWatcher() {
  yield all([
    takeEvery(SET_USER_ASYNC, fetchUser),
    takeEvery(LOGIN_USER_ASYNC, loginUser)
  ]);
}
