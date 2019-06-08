import { Loader } from '../../components/loader';
import { loginUserAsync } from '../../store/user';

export const LoginComponent = ({ dispatch, status }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

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

      <input type="submit" value="Login" />

      <Loader shown={status.loading} />
    </form>
  );
};

export const Login = connect(state => ({ status: state.user.status }))(LoginComponent);
