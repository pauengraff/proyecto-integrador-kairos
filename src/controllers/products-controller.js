const productsService = require("../services/products-service");
const categoriesService = require("../services/category-service");
const brandService = require("../services/brand-service");

module.exports = {
  index: async (req, res) => {
    const products = await productsService.getAllProducts();

    res.render("products/products", { products });
  },

  // DETAIL - Detail from one product ID
  detailById: async (req, res) => {
    const product = await productsService.getProduct(req.params.id);
    res.render("products/detailById", { product });
  },

  // CART
  productCart: (req, res) => {
    res.render("products/productCart");
  },
  // ADD PRODUCT
  // form to create product
  add: async (req, res) => {
    const [category, brand] = await Promise.all([
      categoriesService.getAllCategories(),
      brandService.getAllBrands(),
    ]);
    res.render("products/productAdd", { category, brand });
  },
  // Process to store product on db
  store: async (req, res) => {
    console.log("store", req.body);
    console.log("file store", req.file);
    const product = await productsService.createProduct(req.body, req.file);
    res.redirect("/products");
  },
  //Form to edit
  edit: async (req, res) => {
    const [product, brand, category] = await Promise.all([
      productsService.getProduct(req.params.id),
      brandService.getAllBrands(),
      categoriesService.getAllCategories(),
    ]);
    res.render("products/productEdit", { product, brand, category });
  },
  // Edit Process
  update: async (req, res) => {
    await productsService.updateProduct(req.params.id, req.body);
    res.redirect("/products");
  },

  // Delete - Delete one product from DB
  destroy: async (req, res) => {
    await productsService.deleteProduct(req.params.id);
    res.redirect("/products");
  },
};
