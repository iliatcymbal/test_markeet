import { getCategories } from '../../services/categoriesService';
import { setCategories } from '../../store/categories'

export const CategoriesComponent = ({ categories, dispatch }) => {
  React.useEffect(() => {
    getCategories()
      .then(data => dispatch(setCategories(data)))
  }, []);

  return (
    <>
      <h1>Categories</h1>
      <ul>
        {
          categories.map(cat => <li key={cat.title}>{cat.title}</li>)
        }
      </ul>
    </>
  );
};

export const Categories = connect(state => ({ categories: state.categories }))(CategoriesComponent);
