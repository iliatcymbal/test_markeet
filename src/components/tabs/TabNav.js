import './tabs.scss'

export const TabNav = ({ list, select }) => {
  const onClick = (e, index) => {
    select(index);
    e.preventDefault();
  };

  return (
    <nav className="nav-tab">
      <ul> {
        list.map((el, index) =>
          (<li key={index}>
            <a href="#"
               onClick={e => onClick(e, index)}
            >
              {el}
            </a>
          </li>)
        )
      }
      </ul>
    </nav>);
};
