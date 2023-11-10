const productsServiceSql = require("../services/products-service-sql");

module.exports = {
  list: (req, res) => {
    productsServiceSql.getAllProducts().then((products) => {
      res.render("sql", { products });
    });
  },
};
