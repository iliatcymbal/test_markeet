import { Route, Switch } from 'react-router-dom';

import { Private } from './Private';
import { Public } from './Public';

import { Category } from './category';
import { Categories } from './categories';
import { Product } from './product';

export const Pages = ({ user }) => (
  <Switch>
    <Route
      path="/categories"
      component={Categories}
      exact
    />

    <Route
      path="/categories/:id"
      component={Category}
    />

    <Route
      path="/products/:id"
      component={Product}
    />

    {
      user ? Private : Public
    }

    <Route
      render={({ location }) => <h1>Requested url <mark>{location.pathname}</mark> not found</h1>}
    />
  </Switch>
);
