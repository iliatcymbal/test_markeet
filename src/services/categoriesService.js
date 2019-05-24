import { server } from './';

export const getInfo = () => server.get('shop_info');

export const getCategories = () => server.get('public/categories');

export const getCategory = id => server.get(`public/categories/${id}`);

export const getCategoryByTitle = title => server.post(`public/categories/${title}`);

export const updateCategory = category => server.put(`categories/${category.id}`, category);

export const createCategory = category => server.post('categories', category);

export const deleteCategory = id => server.delete(`categories/${id}`);
