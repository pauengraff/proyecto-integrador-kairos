const productsService = require("../services/products-service");
const categoriesService = require("../services/category-service");
const brandService = require("../services/brand-service");

module.exports = {
  index: async (req, res) => {
    const getProducts = productsService.getAllProducts();
    const getBrand = brandService.getAllBrands();
    const [products, brand] = await Promise.all([getProducts, getBrand]);

    res.render("products/products", { products, brand });
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
  add: (req, res) => {
    const getCategory = categoriesService.getAllCategories();
    const getBrand = brandService.getAllBrands();
    Promise.all([getCategory, getBrand]).then(([category, brand]) => {
      res.render("products/productAdd", { category, brand });
    });
  },

  // Process to store product on db
  store: (req, res) => {
    console.log(req.body);
    productsService.createProduct(req.body, req.file).then((product) => {
      res.redirect("/products");
    });
  },
  //Form to edit
  edit: (req, res) => {
    const category = categoriesService.getAllCategories();
    const brand = brandService.getAllBrands();
    const product = productsService.getProduct(req.params.id);
    Promise.all([product, brand, category]).then(
      ([product, brand, category]) => {
        res.render("products/productEdit", { product, brand, category });
      }
    );
  },
  // Edit Process
  update: (req, res) => {
    productsService.updateProduct(req.params.id, req.body).then((product) => {
      res.redirect("/products");
    });
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    productsService.deleteProduct(req.params.id).then(() => {
      res.redirect("/products");
    });
  },
};
