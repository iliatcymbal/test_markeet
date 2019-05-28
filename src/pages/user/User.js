import { updateUserService } from '../../services/userService';
import { Form } from '../../components/form';

import './user.scss';

export const User = ({ user }) => {
  return (
    <>
      <h1>Update user</h1>
      <Form
        disabledFields={["email"]}
        skipped={["password"]}
        data={user}
      />
    </>
  );
};
