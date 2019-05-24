import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';
import { removeUser } from '../../store/user';

import './header.scss';

export const HeaderComponent = ({ user, dispatch }) => {
  const onLogout = () => dispatch(removeUser());

  return (
    <header className="header">
      <div className="header-box">
        <Link to="/" className="header-logo"><img src="/images/logo.png" alt="todo" /></Link>
        <Navigation user={user} onLogout={onLogout} />
      </div>
    </header>
  );
};

const mapToProps = state => ({
  user: state.user
});

export const Header = connect(mapToProps)(HeaderComponent);
