import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';
import { removeUser } from '../../store/user';

import './header.scss';

export const HeaderComponent = ({ user, removeUser, info }) => {
  return (
    <header className="header">
      <div className="header-box">
        <Link to="/" className="header-logo"><img src="/images/logo.png" alt="todo" /></Link>
        <Navigation user={user} info={info} onLogout={removeUser} />
      </div>
    </header>
  );
};

const mapToProps = state => ({
  user: state.user.data,
  info: state.info,
});

const mapDispatchToProps = dispatch => ({
  removeUser() { dispatch(removeUser()) },
});

export const Header = connect(mapToProps, mapDispatchToProps)(HeaderComponent);
