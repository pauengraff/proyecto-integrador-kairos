const { Product } = require("../database/models");

module.exports = {
  getAllProducts: () => {
    return Product.findAll({ include: ["category", "brand"] });
  },
};
