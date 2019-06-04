import { useState } from 'react'
import { Loader } from '../../components/loader'
import { loginUserAsync } from '../../store/user'

export const LoginComponent = ({ dispatch }) => {
  const [loading, setLoadState] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    setLoadState(true);

    /*loginUserService(data)
      .then(user => {
        setLoadState(false);
        dispatch(setUser(user));
        // Store.dispatch({ type: 'Set user', data: user })
      })
      .catch(err => {
        setLoadState(false);
        setError(err);
      })*/

    dispatch(loginUserAsync(data));
  };

  return (
    <form action="#" onSubmit={onSubmit}>
      <input
        required
        type="text"
        name="email"
        defaultValue="admin@a.com"
      />
      <br /><br />
      <input
        required
        type="password"
        name="password"
        defaultValue="admin"
      />
        <br /><br />

        <p>
          {error}
        </p>

      <input type="submit" value="Login" />

      <Loader shown={loading} />
    </form>
  );
};

export const Login = connect()(LoginComponent);
