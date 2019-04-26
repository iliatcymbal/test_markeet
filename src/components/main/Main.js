import { Users } from '../users';
import { Counter } from '../counter';

import './main.scss';

export class Main extends Component {
  state = {
    users: [],
    selectedUser: null
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

  showUserInfo = ({ phone, name, website }) => {
    this.setState({ selectedUser: name });
  }

  render() {
    const { user, element } = this.props;
    const { users, selectedUser } = this.state;

    return (
      <main className="main">
        <aside className="aside">Some additional info</aside>
        <section className="content">
          <h1>Main page ({selectedUser})</h1>
          <p>{user}</p>

          <Users list={users} onClick={this.showUserInfo} />

        </section>
      </main>
    );
  }
}
