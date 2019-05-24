import store from '../state';
import { SET_USER, REMOVE_USER } from './actions'

export const user = (state = store.user, action) => {
  switch (action.type) {
    case SET_USER: return action.data;
    case REMOVE_USER: return store.user;
  }

  return state;
};
