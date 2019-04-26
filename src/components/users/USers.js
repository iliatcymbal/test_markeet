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
        list && list.map(({ id, ...rest }) => (
          <User
            key={id}
            data={rest}
            onClick={onClick}
          />
        ))
      }
    </ul>
  );
}
