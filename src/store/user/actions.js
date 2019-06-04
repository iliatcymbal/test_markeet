export const SET_USER = 'Set user';
export const SET_USER_BEGIN = 'Set user begin';
export const SET_USER_ASYNC = 'Set user async';
export const LOGIN_USER_ASYNC = 'Login user async';
export const REMOVE_USER = 'Remove user';

export const setUser = data => ({ type: SET_USER, data });
export const setUserBegin = () => ({ type: SET_USER_BEGIN });
export const setUserAsync = () => ({ type: SET_USER_ASYNC });
export const loginUserAsync = data => ({ type: LOGIN_USER_ASYNC, data });
export const removeUser = () => ({ type: REMOVE_USER });
