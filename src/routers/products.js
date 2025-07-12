import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  deleteProductController,
  getProductByIdController,
  getProductsController,
  patchProductController,
  postProductController,
} from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/products', ctrlWrapper(getProductsController));
productsRouter.get(
  '/products/:productId',
  ctrlWrapper(getProductByIdController),
);
productsRouter.post('/products', ctrlWrapper(postProductController));
productsRouter.patch(
  '/products/:productId',
  ctrlWrapper(patchProductController),
);
productsRouter.delete(
  '/products/:productId',
  ctrlWrapper(deleteProductController),
);

export default productsRouter;
