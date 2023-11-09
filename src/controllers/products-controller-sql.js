const { Product } = require("../database/models");

module.exports = {
  list: (req, res) => {
    Product.findAll().then((products) => {
      res.render("sql", { products });
    });
  },
};
