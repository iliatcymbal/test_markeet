import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header';
import { Main } from './components/main/Main';

import './app.scss';

const App = () => (
  <>
    <Header test />
    <Main />
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
