import { ButtonLink } from '../../components/button'
import './home.scss';

export const Home = ({ history }) => (
  <article>
    <h1>Welcome to the Toy market</h1>
    <p>We are pleased to announce the launch of our brand new website!</p>
    <p>From the 1st December our company starts to deliver online order.</p>
    <p>First hundred customers gets a 10% discount!</p>

    <ButtonLink to="/categories" />
  </article>
);
