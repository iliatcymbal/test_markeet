import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/header';
import { Main } from './components/main/Main';
import { Pages } from './pages';

import './app.scss';

class App extends Component {
  state = {
    user: null
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  onLogout = () => {
    this.setState({ user: null });
  }

  render() {
    const { user } = this.state

    return (
      <>
        <Header user={user} onLogout={this.onLogout} />
        <Main>
          <Pages onLogin={this.onLogin} user={user} />
        </Main>
      </>
    );
  }
};

const Root = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(Root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
