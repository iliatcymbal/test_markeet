import { createUserAsync } from '../../store/user';
import { Form } from '../../components/form';

import './user.scss';

export const UserComponent = ({ dispatch, history, user })  => {
  const handleSubmit = info => {
    const callback = () => history.push('/success');
    dispatch(createUserAsync({ info, callback }))
  };

  return (
    <>
      <h1>Update user</h1>
      <Form
        data={user}
        disabledFields={['email']}
        ignored={['password']}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export const User = connect(state => ({
  user: state.user.data,
  status: state.user.status
}))(UserComponent);
