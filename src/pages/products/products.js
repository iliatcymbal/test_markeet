import { setProducts } from '../../store/products';
import { getProducts } from '../../services/productsService';
import ProductItem from './ProductItem';

import './products.scss';

export class ProductsComponent extends Component {
  state = {
    titleInEdit: null,
    titleToRemove: null,
    showWarning: false,
  }

  componentDidMount() {
    getProducts().then(products => this.props.dispatch(setProducts(products)));
  }

  goToProduct = (id) => {
    this.props.history.push(`/products/${id}`);
  }

  updateTitle = (title) => {
    console.log(title);
  }

  setTitleInEdit = (id) => {
    this.setState({ titleInEdit: id })
  }

  hideWarning = () => {
    this.setState({ showWarning: false })
  }

  removeWarning = (id, title) => {
    this.setState({
      showWarning: `You are going to remove ${title} product.\nPress "Ok" to confirm`,
      titleToRemove: id
    });
  }

  remove = () => {
    console.log('remove')
  }

  render() {
    const { titleInEdit } = this.state;
    const { products } = this.props;

    return (
      <>
        <h1>Products</h1>

        <ul className='products'>
          {
            products.map(({ id, title, image }) =>
              <ProductItem
                key={id}
                title={title}
                titleInEdit={titleInEdit === id}
                updateTitle={this.updateTitle}
                setTitleInEdit={this.setTitleInEdit}
                remove={this.removeWarning}
                activate={this.goToProduct}
                id={id}
                image={image}
              />
            )
          }
        </ul>
      </>
    );
  }
}

export const Products = connect(state => ({ products: state.products }))(ProductsComponent);
