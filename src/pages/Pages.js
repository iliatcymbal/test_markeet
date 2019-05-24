import { connect } from 'react-redux';

import { Route, Switch } from 'react-router-dom';

import { Private } from './Private';
import { Public } from './Public';

import { Category } from './category';
import { Product } from './product';

export const PagesComponent = ({ onLogin, user }) => (
  <Switch>
    <Route
      path="/categories"
      render={() => <h1>Categories</h1>}
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

const mapState = state => ({ user: state.user });

export const Pages = connect(mapState)(PagesComponent);
