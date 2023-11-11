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
  // form to create
  add: (req, res) => {
    const category = categoriesServiceSql.getAllCategories();
    const brand = brandServiceSql.getAllBrands();

    Promise.all([category, brand]).then(([category, brand]) => {
      res.render("products/productAdd", { category, brand });
    });
  },

  // Method to store data from form
  store: (req, res) => {
    productsServiceSql.createProduct(req.body).then((product) => {
      res.redirect("/products");
    });
  },
  // recordar sumar procesos desde aqui
};

/*
  //Form to edit
  edit: (req, res) => {
    const id = req.params.id;
    const product = productServices.getProduct(id);
    res.render("products/productEdit", { product });
  },
  update: (req, res) => {
    const product = req.body;
    const id = req.params.id;
    productServices.updateProduct(id, product);
    res.redirect("/products");
  },
  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const id = req.params.id;
    productServices.deleteProduct(id);
    res.redirect("/products");
  },
};

*/
