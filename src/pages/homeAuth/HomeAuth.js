import { Button } from '../../components/button';
import './main.scss';

export class HomeAuthComponent extends Component {
  goToCategories = () => {
    this.props.history.push('/categories');
  }

  render() {
    const { user = {}, info } = this.props;

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

export const HomeAuth = connect(state => ({ user: state.user.data, info: state.info }))(HomeAuthComponent);
