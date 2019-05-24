import { server } from './index';

export const checkUserService = () => server.get('public/checkUser');

export const loginUserService = data => server.post('public/login', data);

export const updateUserService = user => server.put('user', user);

export const createUserService = user => server.post('public/user', user);
