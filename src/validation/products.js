import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

export const createProductsSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string()
    .valid('books', 'electronics', 'clothing', 'other')
    .required(),
  description: Joi.string(),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('userId should be a valid mongo id');
    }
    return value;
  }),
});

export const updateProductsSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
  description: Joi.string(),
});
