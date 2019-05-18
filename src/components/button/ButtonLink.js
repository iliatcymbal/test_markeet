import { Redirect } from 'react-router-dom'
import { useState } from 'react';

export const ButtonLink = ({ to }) => {
  const [goTo, setGoTo] = useState(false);
  const onClick = () => setGoTo(true);

  return (
    goTo
      ? <Redirect to={to} />
      : (
        <button onClick={onClick}>
          Go to ...
        </button>
      )
  );
}
