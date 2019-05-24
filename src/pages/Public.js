import { Route } from 'react-router-dom';

import { Home } from './home';
import { Login } from './login';
import { User } from './newUser';

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
      key="login"
    />,

    <Route
      path="/categories"
      render={() => <h1>Categories</h1>}
      key="categories"
    />
  ];
