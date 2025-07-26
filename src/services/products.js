import { Product } from '../db/models/product.js';

export const getProducts = async (filter, userId) => {
  const { category, minPrice, maxPrice } = filter;

  const productsQuery = Product.find({ userId });

  if (category) productsQuery.where('category').equals(category);
  if (minPrice) productsQuery.where('price').gte(minPrice);
  if (maxPrice) productsQuery.where('price').lte(maxPrice);

  return productsQuery;
};

export const getProductById = async (productId, userId) => {
  return await Product.findOne({ _id: productId, userId });
};

export const postProduct = async (payload) => {
  return await Product.create(payload);
};

export const patchProduct = async (productId, payload, userId) => {
  return await Product.findOneAndUpdate({ _id: productId, userId }, payload, {
    new: true,
  });
};

export const deleteProduct = async (productId, userId) => {
  return await Product.findOneAndDelete({ _id: productId, userId });
};
