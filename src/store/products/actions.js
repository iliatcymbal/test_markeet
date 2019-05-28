export const SET_PRODUCTS = 'Set products';
export const REMOVE_PRODUCTS = 'Remove products';

export const setProducts = data => ({ type: SET_PRODUCTS, data });
export const removeProducts = data => ({ type: REMOVE_PRODUCTS, data });
