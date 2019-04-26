import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header';
import { Main } from './components/main/Main';

import './app.scss';

const App = () => {
  const props = {
    user: 'Ilia',
    age: 34,
    element: 'Succes'
  };

  return (
    <>
      <Header test />
      <Main {...props} age={55} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
