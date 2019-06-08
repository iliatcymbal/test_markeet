import store from '../state';
import { SET_USER, REMOVE_USER, SET_USER_BEGIN, SET_USER_ERROR } from './actions';

export const user = (state = store.user, action) => {
  switch (action.type) {
    case SET_USER_BEGIN: return {
      ...state,
      status: {
        loading: true,
        error: ''
      }
    };
    case SET_USER: return {
      data: action.data,
      status: {
        loading: false,
        error: ''
      }
    };
    case SET_USER_ERROR: return {
      ...state,
      status: {
        loading: false,
        error: action.data
      }
    };
    case REMOVE_USER: return store.user;
  }

  return state;
};
