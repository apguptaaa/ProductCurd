import axios from 'axios';

const BaseUrl = 'http://localhost:5000/api';
const axiosInstance = axios.create({
  baseURL: BaseUrl,
});

// Create product
export const createProduct = (productData) => {
  return axiosInstance.post('/productinsert', productData);
};

// Get all products
export const getProducts = () => {
  return axiosInstance.get('/productdisplay');
};

// View single product
export const viewProduct = (id) => {
  return axiosInstance.get(`/productview/${id}`);
};

// Delete product
export const deleteProduct = (id) => {
  return axiosInstance.delete(`/productdelete/${id}`);
};

// Update product
export const updateProduct = (id, updateData) => {
  return axiosInstance.put(`/productupdate/${id}`, updateData);
};
