import { Route, Redirect } from 'react-router-dom';

import { HomeAuth } from './homeAuth';
import { Products } from './products';
import { User } from './user';

export const Private = [
  <Route
    path="/"
    exact
    component={HomeAuth}
    key="HomeAuth"
  />,

  <Route
    path="/products"
    component={Products}
    key="products"
    exact
  />,

  <Route
    path="/user"
    component={User}
    key="user"
    exact
  />,

  <Redirect
    from="/login"
    to="/"
    key="login"
  />
];
