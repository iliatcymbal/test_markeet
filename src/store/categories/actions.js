export const SET_CATEGORIES = 'Set categories';
export const REMOVE_CATEGORIES = 'Remove categories';
export const SET_INFO = 'Set Info';

export const setCategories = data => ({ type: SET_CATEGORIES, data });
export const removeCategories = data => ({ type: REMOVE_CATEGORIES, data });
export const setInfo = data => ({ type: SET_INFO, data });
