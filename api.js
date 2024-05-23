import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getProducts = async () => {
  return await axios.get(`${API_URL}/products`);
};

export const getProduct = async (id) => {
  return await axios.get(`${API_URL}/products/${id}`);
};

export const addToCart = async (product) => {
  return await axios.post(`${API_URL}/cart`, product);
};

export const getCart = async () => {
  return await axios.get(`${API_URL}/cart`);
};

export const checkout = async (orderDetails) => {
  return await axios.post(`${API_URL}/checkout`, orderDetails);
};
