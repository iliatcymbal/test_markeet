import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import { store } from './store';
import { App } from './appComponent';

const RouteApp = withRouter(App);

const Root = (
  <Provider store={store}>
    <Router>
      <RouteApp />
    </Router>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
