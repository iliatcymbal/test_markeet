export const SET_USER = 'Set user';
export const REMOVE_USER = 'Remove user';

export const setUser = data => ({ type: SET_USER, data });
export const removeUser = () => ({ type: REMOVE_USER });
