import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';

import './header.scss';

export const Header = ({ user, onLogout }) => (
  <header className="header">
    <div className="header-box">
      <Link to="/" className="header-logo"><img src="/images/logo.png" alt="todo" /></Link>
      <Navigation user={user} onLogout={onLogout} />
    </div>
  </header>
);
