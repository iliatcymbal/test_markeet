import { Link } from 'react-router-dom';

export const Success = () => (
  <section>
    <p>Account was successfully created.</p>
    <p>Now you can use your email and password to login into profile.</p>
    <Link to="/">Go to main page</Link>
  </section>
);
