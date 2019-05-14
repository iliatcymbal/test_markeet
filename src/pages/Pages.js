import { Route, Switch, Redirect } from 'react-router-dom';

import { HomeAuth } from './homeAuth';
import { Home } from './home';
import { Login } from './login';

export const Pages = ({ onLogin, user }) => {

  return (
    user ?
    <Switch>
        <Route
          path="/"
          exact
          component={Home}
        />

        <Route
          path="/categories"
          component={HomeAuth}
        />

        <Redirect
          from="/login"
          to="/"
        />

        <Route
          render={({ location }) => <h1>Requested url <mark>{location.pathname}</mark> not found</h1>}
        />
      </Switch> :
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />

      <Route
        path="/login"
        render={(props) => <Login onLogin={onLogin} {...props} />}
      />

      <Route
        render={({ location }) => <h1>Requested url <mark>{location.pathname}</mark> not found</h1>}
      />
    </Switch>
  );
};
