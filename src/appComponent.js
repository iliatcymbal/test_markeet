import { connect } from 'react-redux';

import { checkUserService } from './services/userService';
import { Header } from './components/header';
import { Main } from './components/main';
import { Loader } from './components/loader';
import { Pages } from './pages';
import { setUser } from './store/user'

import './app.scss';

export class AppComponent extends Component {
  state = {
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

  checkUser() {
    this.setState({ isLoading: true });
    checkUserService()
      .then(user => {
        this.props.dispatch(setUser(user));
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      })
  }

  render() {
    const { isLoading } = this.state;

    return (
      <>
        <Header />

        <Main>
          <Loader shown={isLoading} />
          {
            !isLoading && <Pages />
          }
        </Main>
      </>
    );
  }
};

export const App = connect()(AppComponent);
