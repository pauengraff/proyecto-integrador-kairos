// middleware para validacion de creacion de productos
const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);

  if (resultValidation.errors.length > 0) {
    return res.render("products/add", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }
  next();
};
