const productsService = require("../../services/products-service");

module.exports = {
  list: async (req, res) => {
    const product = await productsService.getAllProducts();
    res.json({
      meta: {
        status: 200,
        total: product.length,
        url: req.originalUrl,
      },
      data: product,
    });
  },

  create: async (req, res) => {
    product = await productsService.createProduct();
    res.json({
      meta: {
        status: 201,
        total: product.length,
        url: req.originalUrl,
      },
      data: product,
    });
  },
};
