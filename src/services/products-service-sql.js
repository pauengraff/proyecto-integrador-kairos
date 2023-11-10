const { Product, Category } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
  getAllProducts: () => {
    return Product.findAll({ include: ["category"] });
  },
};
