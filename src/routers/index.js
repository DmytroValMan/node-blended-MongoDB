import { Router } from 'express';

import productsRouter from './products.js';
import usersRouter from './users.js';
import { authenticate } from '../middlewares/authenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.use('/users', usersRouter);
router.use('/products', ctrlWrapper(authenticate), productsRouter);

export default router;
