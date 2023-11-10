const productsServiceSql = require("../services/products-service-sql");
const categoriesServiceSql = require("../services/categories-service-sql");

module.exports = {
  list: (req, res) => {
    productsServiceSql.getAllProducts().then((products) => {
      res.render("sql", { products });
    });
  },
};
