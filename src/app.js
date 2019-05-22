import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import { checkUserService } from './services/userService'
import { Header } from './components/header';
import { Main } from './components/main/Main';
import { Pages } from './pages';
import { Loader } from './components/loader';

import './app.scss';

class App extends Component {
  state = {
    user: null,
    isLoading: false,
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate(prevProp, prevStates) {
    const { user } = this.state;

    if (prevStates.user && !user) {
      this.props.history.push('/');
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  onLogout = () => {
    this.setState({ user: null });
  }

  checkUser() {
    this.setState({ isLoading: true });
    checkUserService()
      .then(user => {
        this.onLogin(user);
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      })
  }

  render() {
    const { user, isLoading } = this.state

    return (
      <>
        <Header user={user} onLogout={this.onLogout} />

        <Main>
          <Loader shown={isLoading} />
          {
            !isLoading && <Pages onLogin={this.onLogin} user={user} />
          }
        </Main>
      </>
    );
  }
};

const RouteApp = withRouter(App);

const Root = (
  <Router>
    <RouteApp />
  </Router>
);

ReactDOM.render(Root, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
