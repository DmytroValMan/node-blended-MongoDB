import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  deleteProductController,
  getProductByIdController,
  getProductsController,
  patchProductController,
  postProductController,
} from '../controllers/products.js';
import {
  createProductsSchema,
  updateProductsSchema,
} from '../validation/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));
router.get('/:productId', isValidId, ctrlWrapper(getProductByIdController));
router.post(
  '/',
  validateBody(createProductsSchema),
  ctrlWrapper(postProductController),
);
router.patch(
  '/:productId',
  isValidId,
  validateBody(updateProductsSchema),
  ctrlWrapper(patchProductController),
);
router.delete('/:productId', isValidId, ctrlWrapper(deleteProductController));

export default router;
