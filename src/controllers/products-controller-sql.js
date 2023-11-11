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
};

/*
  // Method to store data from form
  store: (req, res) => {
    const product = {
      name: req.body.name,
      brand: req.body.brand,
      price: Number(req.body.price),
      description: req.body.description,
      image: req.file ? req.file.filename : "default-image.jpeg",
    };
    productServices.createProduct(product); // aca manda a la base de datos via servicio
    res.redirect("/products");
  },

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
