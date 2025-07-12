export const ctrlWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      return await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
