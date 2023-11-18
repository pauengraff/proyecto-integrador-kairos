// middleware para validacion de creacion de productos
const categoriesService = require("../services/category-service");
const brandService = require("../services/brand-service");
const path = require("path");

const { validationResult } = require("express-validator");

module.exports = async (req, res, next) => {
  const resultValidation = validationResult(req);

  const [category, brand] = await Promise.all([
    categoriesService.getAllCategories(),
    brandService.getAllBrands(),
  ]);

  if (resultValidation.errors.length > 0) {
    return res.render("products/productAdd", {
      brand,
      category,
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }
};
