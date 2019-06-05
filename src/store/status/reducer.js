import store from '../state';
import { SET_ERROR } from './actions';

export const status = (state = store.status, { type, data = '' }) => {
  switch (type) {
    case SET_ERROR:
      return data;
  }

  return state;
};
