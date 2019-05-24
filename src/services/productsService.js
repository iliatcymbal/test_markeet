import { server } from './';

export const getProducts = () => server.get('public/products');

export const deleteProducts = id => server.delete(`products/${id}`);

export const updateProduct = product => server.put(`products/${product.id}`, product);

export const getProduct = id => server.get(`public/products/${id}`);

export const uploadProductImage = ({ data, id }) => server.upload(`products/${id}/upload`, data);
