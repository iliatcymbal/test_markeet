import { getCategories, updateCategory } from '../../services/categoriesService';
import { setCategories } from '../../store/categories'
import { FilteredItems } from '../../components/filteredItems';
import { EditableItems } from '../../components/editableItems';

import './categories.scss';

export const CategoriesComponent = ({ categories, dispatch }) => {
  const fetchCategories = () => getCategories()
    .then(data => dispatch(setCategories(data)))

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const update = (category) => {
    category.published = true;
    updateCategory(category.id, category).then(fetchCategories);
  }

  return (
    <>
      <h1>Categories</h1>
      <div className="category-items">

        <div>
          <h2>Published categories</h2>
          <EditableItems items={categories.filter(item => item.published)} onSelect={console.log}/>
        </div>

        <div>
          <h2>Unpublished categories</h2>
          <FilteredItems
            items={categories.filter(item => !item.published)}
            onSelect={update}
          />
        </div>
      </div>
    </>
  );
};

export const Categories = connect(state => ({ categories: state.categories }))(CategoriesComponent);
