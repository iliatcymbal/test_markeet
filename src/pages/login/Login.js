import { useState } from 'react'
import { connect } from 'react-redux'
import { Loader } from '../../components/loader'
import { loginUserService } from '../../services/userService'
import { setUser } from '../../store/user'

export const LoginComponent = ({ dispatch }) => {
  const [loading, setLoadState] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    setLoadState(true);

    loginUserService(data)
      .then(user => {
        setLoadState(false);
        dispatch(setUser(user));
        // Store.dispatch({ type: 'Set user', data: user })
      })
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

      <input type="submit" value="Login" />

      <Loader shown={loading} />
    </form>
  );
};

export const Login = connect()(LoginComponent);
