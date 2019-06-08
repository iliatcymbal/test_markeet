import { Route } from 'react-router-dom';

import { Home } from './home';
import { Login } from './login';
import { User } from './newUser';
import { Success } from './success';

export const Public = [
  <Route
    path="/"
    exact
    component={Home}
    key="home"
  />,

  <Route
    path="/login"
    component={Login}
    key="login"
  />,

  <Route
    path="/newuser"
    component={User}
    key="newuser"
  />,

  <Route
    path="/success"
    component={Success}
    key="success"
  />,

  <Route
    path="/categories"
    render={() => <h1>Categories</h1>}
    key="categories"
  />
];
