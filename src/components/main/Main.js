import './main.scss';

const users = [
  { id: 123, name: 'Patric' },
  { id: 46, name: 'Teresa' },
  { id: 789, name: 'John' }
];

const Li = ({ item, field, index }) => (
  <li>
    <strong>{index}</strong> - {item[field]}
  </li>
);

const Nums = ({ list = [], field = 'name', isUl }) => {
  const items = list.map((item, index) => (
    <Li
      key={item.id}
      item={item}
      field={field}
      index={index}
    />
  ));

  return (
    isUl ? <ul>{items}</ul> : <ol>{items}</ol>
  );
};

export const Main = () => (
  <main className="main">
    <aside className="aside">Some addtional info</aside>
    <section className="content">
      <h1>Main page</h1>
      <p>Ok, here we are!</p>

      <Nums isUl list={users} field="id" />
    </section>
  </main>
);
