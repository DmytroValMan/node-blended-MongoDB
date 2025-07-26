import createHttpError from 'http-errors';
import {
  deleteProduct,
  getProductById,
  getProducts,
  patchProduct,
  postProduct,
} from '../services/products.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getProductsController = async (req, res) => {
  const filter = parseFilterParams(req.query);

  const products = await getProducts(filter, req.user._id);
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId, req.user._id);
  if (!product) throw createHttpError(404, 'Product not found');
  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const postProductController = async (req, res) => {
  const product = await postProduct({ ...req.body, userId: req.user._id });
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const patchProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await patchProduct(productId, req.body, req.user._id);
  if (!product) throw createHttpError(404, 'Product not found');
  res.json({
    status: 200,
    message: 'Successfully patched a product!',
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId, req.user._id);
  if (!product) throw createHttpError(404, 'Product not found');
  res.status(204).send();
};
