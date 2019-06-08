import { takeEvery, put, all } from 'redux-saga/effects';

import {
  setUser,
  setUserBegin,
  errorUser,
  removeUser,
  SET_USER_ASYNC,
  LOGIN_USER_ASYNC,
  CREATE_USER_ASYNC,
} from './actions';
import {
  checkUserService,
  loginUserService,
  createUserService,
  updateUserService,
} from '../../services/userService';

function* fetchUser() {
  yield put(setUserBegin());
  try {
    const user = yield checkUserService();
    yield put(setUser(user));
  } catch (err) {
    yield put(errorUser(err));
  }
}

function* loginUser(action) {
  yield put(setUserBegin());
  try {
    const user = yield loginUserService(action.data);
    yield put(setUser(user));
  } catch (err) {
    yield put(errorUser(err));
  }
}

function* createUser({ data }) {
  yield put(setUserBegin());
  try {
    yield createUserService(data.info);
    yield put(removeUser());
    data.callback();
  } catch (err) {
    yield put(errorUser(err));
  }
}

export function* userWatcher() {
  yield all([
    takeEvery(SET_USER_ASYNC, fetchUser),
    takeEvery(LOGIN_USER_ASYNC, loginUser),
    takeEvery(CREATE_USER_ASYNC, createUser)
  ]);
}
