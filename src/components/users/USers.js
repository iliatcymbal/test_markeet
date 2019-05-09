import PropTypes from 'prop-types';

const User = ({ data, onClick }) => {
  const clickHandler = (event) => {
    onClick(data);
    event.preventDefault();
  };
  const { name, email } = data;

  return (
    <li>
      <a href="#" onClick={clickHandler}>
        <strong>{name}</strong>
      </a> {email}
    </li>
  );
};

export const Users = ({ list, onClick }) => {
  return (
    <ul>
      {
        list && list.map((item) => (
          <User
            key={item.id}
            data={item}
            onClick={onClick}
          />
        ))
      }
    </ul>
  );
}

Users.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func
};

Users.defaultProps = {
  onClick: _ => _
};
