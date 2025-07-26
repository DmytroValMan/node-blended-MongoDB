import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  const { productId } = req.params;
  const isValid = isValidObjectId(productId);

  if (!isValid) throw createHttpError(400, 'Bad Request');

  next();
};
