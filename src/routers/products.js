import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  deleteProductController,
  getProductByIdController,
  getProductsController,
  patchProductController,
  postProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/products', ctrlWrapper(getProductsController));
router.get('/products/:productId', ctrlWrapper(getProductByIdController));
router.post('/products', ctrlWrapper(postProductController));
router.patch('/products/:productId', ctrlWrapper(patchProductController));
router.delete('/products/:productId', ctrlWrapper(deleteProductController));

export default router;
