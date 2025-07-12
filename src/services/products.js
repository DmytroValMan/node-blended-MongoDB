import { Product } from '../db/models/product.js';

export const getProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id) => {
  return await Product.findById(id);
};

export const postProduct = async (payload) => {
  return await Product.create(payload);
};

export const patchProduct = async (id, payload) => {
  return await Product.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
