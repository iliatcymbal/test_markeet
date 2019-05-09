import { Users } from '../users';
import { Counter } from '../counter';
import { Tabs, Tab } from '../tabs';

import './main.scss';

const Test = ({ children }) => {
  console.log(children);

  return (
    <div>
        {children.filter(el => el.type === Tabs)}
    </div>
  );
}

export class Main extends Component {
  state = {
    users: [],
    posts: [],
    selectedUser: null,
    filterUser: ''
  }

  constructor() {
    super();
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({
        users
      }));
  }

  showUserInfo = ({ id, name }) => {
    this.setState({ selectedUser: name });

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(data => data.json())
      .then(posts => this.setState({ posts }));
  }

  setFilter = ({ target }) => {
    this.setState({ filterUser: target.value });
  }

  filterUsers = (user) => {
    const { filterUser } = this.state;

    if (filterUser.length > 2) return user.name.toLowerCase().includes(filterUser);

    return true;
  }

  render() {
    const { user } = this.props;
    const { users, selectedUser, posts, filterUser } = this.state;

    return (
      <main className="main">
        <aside className="aside">Some additional info</aside>
        <section className="content">
          <h1>Main page ({selectedUser})</h1>
          <p>{user}</p>

          <Tabs selectedIndex={this.state.tabIndex}>
            <Tab title="One">
              <h2>Hey</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </Tab>

            <Tab title="Two">
              <h2>Yo</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </Tab>
          </Tabs>
          {/*<input type="text" value={filterUser} onChange={this.setFilter} />
          <Users list={users.filter(this.filterUsers)} onClick={this.showUserInfo} />

          {
            posts.length !== 0 &&
            <div>
              <h2>Posts</h2>
              {posts.map(post => <p>{post.title}</p>)}
            </div>
          }*/}

        </section>
      </main>
    );
  }
}
