import { createUserAsync } from '../../store/user';
import { Form } from '../../components/form';

import './user.scss';

export const UserComponent = ({ dispatch, history })  => {
  const handleSubmit = info => {
    const callback = () => history.push('/success');
    dispatch(createUserAsync({ info, callback }))
  };

  return (
    <>
      <h1>Create new user</h1>
      <Form handleSubmit={handleSubmit}/>
    </>
  );
};

export const User = connect()(UserComponent);
