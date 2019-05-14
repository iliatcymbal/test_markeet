import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';

import './header.scss';

export const Header = ({ user, onLogout }) => (
  <header className="header">
    <div className="header-box">
      <Link to="/" className="header-logo"><img src="/images/logo.png" alt="todo" /></Link>
      <Navigation />

      {
        user ?
        <div>
          <mark>{user.email}</mark>
          <button
            onClick={onLogout}
          >
            Logout
          </button>
        </div> :
        <Link
          to="/login"
        >
          Sign in
        </Link>
      }
    </div>
  </header>
);
