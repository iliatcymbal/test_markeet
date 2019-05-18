import { Button } from '../../components/button';
import './main.scss';

export class HomeAuth extends Component {
  state = {
    info: {}
  }

  goToCategories = () => {
    console.log('Go to categories');
  }

  componentDidMount() {
    fetch('http://localhost:8086/shop_info', {
      credentials: 'include',
    })
      .then(r => r.json())
      .then(info => this.setState({ info }));
  }

  render() {
    const { user = {} } = this.props;
    const { info } = this.state;

    return (
      <article className="invitation">
        <h1>Hello, {user.firstName}</h1>
        {
          info &&
            <div className="info">
              <p>You have <strong>{info.categories}</strong> categories ({info.publishedCategories} published)</p>
              <p>You have <strong>{info.products}</strong> products</p>
            </div>
        }
        <Button
          text="Go to categories"
          callback={this.goToCategories}
        />
      </article>
    );
  }
}
