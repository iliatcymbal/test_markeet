import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';

import { checkUserService } from './services/userService';
import { getInfo } from './services/categoriesService';
import { Header } from './components/header';
import { Main } from './components/main';
import { Loader } from './components/loader';
import { Pages } from './pages';
import { setUserAsync } from './store/user'
import { setInfo } from './store/categories'
import { setError } from './store/status';

import './app.scss';

export class AppComponent extends Component {
  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate(prevProp) {
    const { user, status , history, dispatch } = this.props;

    if (prevProp.user && !user) {
      history.push('/');
    }

    if (!prevProp.user && user) {
      this.getInfo();
    }

    if (!prevProp.status && status) {
      this.container.error(
        <strong>{status}</strong>,
        <em>Error!</em>
      );
      dispatch(setError(''));
    }
  }

  checkUser() {
    this.props.dispatch(setUserAsync());
  }

  getInfo() {
    getInfo().then(data => this.props.dispatch(setInfo(data)));
  }

  render() {
    const { user, userStatus } = this.props;

    return (
      <>
        <Header />

        <Main>
          <Loader shown={userStatus.loading} />
          {
            !userStatus.loading && <Pages user={user} />
          }
        </Main>

        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />


      </>
    );
  }
};

const mapState = state => ({ user: state.user.data, userStatus: state.user.status, status: state.status });

export const App = connect(mapState)(AppComponent);
