import { Product } from '../db/models/product.js';

const parseEnam = (category) => {
  if (typeof category !== 'string') return;
  const isEnamValues = Product.schema
    .path('category')
    .enumValues.includes(category);
  if (!isEnamValues) return;
  return category;
};

const parseNumber = (number) => {
  if (typeof number !== 'string') return;

  const parsedNumber = Number(number);
  if (Number.isNaN(parsedNumber)) return;

  return number;
};

export const parseFilterParams = (query) => {
  const { category, minPrice, maxPrice } = query;

  const parsedCategory = parseEnam(category);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);

  return {
    category: parsedCategory,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
  };
};
