import store from '../state';
import { SET_CATEGORIES, REMOVE_CATEGORIES, SET_INFO } from './actions'

export const categories = (state = store.products, action) => {
  switch (action.type) {
    case SET_CATEGORIES: return action.data;
    case REMOVE_CATEGORIES: return [];
  };

  return state;
};

export const info = (state = store.info, action) => {
  if (action.type === SET_INFO) {
    return action.data;
  }

  return state;
};
