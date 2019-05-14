import './button.scss';

export const Button = ({ callback, text, disabled, className }) => {
  const onClick = (e) => {
    e.preventDefault();
    callback();
  };

  return (
    <a
      href="#"
      className={`button ${disabled ? 'button-disabled' : ''} ${className}`}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

Button.defaultProps = {
  callback: _ => _,
  text: 'Ok',
  className: ''
};
