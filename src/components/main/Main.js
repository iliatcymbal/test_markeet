import { Users } from '../users';
import { Counter } from '../counter';

import './main.scss';

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

          <input type="text" value={filterUser} onChange={this.setFilter} />
          <Users list={users.filter(this.filterUsers)} onClick={this.showUserInfo} />

          {
            posts.length !== 0 &&
            <div>
              <h2>Posts</h2>
              {posts.map(post => <p>{post.title}</p>)}
            </div>
          }

        </section>
      </main>
    );
  }
}
