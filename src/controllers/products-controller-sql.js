const productsServiceSql = require("../services/products-service-sql");
const categoriesServiceSql = require("../services/category-service-sql");
const brandServiceSql = require("../services/brand-service-sql");

module.exports = {
  index: (req, res) => {
    productsServiceSql.getAllProducts().then((products) => {
      res.render("sql", { products });
    });
  },

  // DETAIL - Detail from one product ID
  detailById: (req, res) => {
    productsServiceSql.getProduct(req.params.id).then((product) => {
      res.render("products/detailById", { product });
    });
  },
  // CART
  productCart: (req, res) => {
    res.render("products/productCart");
  },
  // ADD PRODUCT
  // form to create product
  add: (req, res) => {
    const category = categoriesServiceSql.getAllCategories();
    const brand = brandServiceSql.getAllBrands();

    Promise.all([category, brand]).then(([category, brand]) => {
      res.render("products/productAdd", { category, brand });
    });
  },

  // Process to store product on db
  store: (req, res) => {
    productsServiceSql.createProduct(req.body).then((product) => {
      res.redirect("/products");
    });
  },
  //Form to edit
  edit: (req, res) => {
    const category = categoriesServiceSql.getAllCategories();
    const brand = brandServiceSql.getAllBrands();
    const product = productsServiceSql.getProduct(req.params.id);
    Promise.all([product, brand, category]).then(
      ([product, brand, category]) => {
        res.render("products/productEdit", { product, brand, category });
      }
    );
  },
  // Edit Process
  update: (req, res) => {
    productsServiceSql
      .updateProduct(req.params.id, req.body)
      .then((product) => {
        res.redirect("/products");
      });
  },
  // Delete - Delete one product from DB
  destroy: (req, res) => {
    productsServiceSql.deleteProduct(req.params.id).then(() => {
      res.redirect("/products");
    });
  },
};
