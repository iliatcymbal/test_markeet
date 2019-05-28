import store from '../state';
import { SET_PRODUCTS, REMOVE_PRODUCTS } from './actions'

export const products = (state = store.products, action) => {
  switch (action.type) {
    case SET_PRODUCTS: return action.data;
    case REMOVE_PRODUCTS: return [];
  }

  return state;
};
