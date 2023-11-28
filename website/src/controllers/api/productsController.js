const productsService = require("../../services/products-service");
const pageSize = 5;

module.exports = {
  list: async (req, res) => {
    const product = await productsService.getAllProducts();
    res.json({
      meta: {
        status: 201,
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
        url: req.originalUrl,
      },
      data: product,
    });
  },
};
