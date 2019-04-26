import './navigation.scss';

export const Navigation = ({ isLogin }) => (
  <nav className="nav">
    <ul>
      <li><a href="/one">One</a></li>
      <li><a href="/two">Two</a></li>
      {isLogin && <li><a href="/user">User Name</a></li>}
    </ul>
  </nav>
);
