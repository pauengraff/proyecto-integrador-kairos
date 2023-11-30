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

  detailById: async (req, res) => {
    const product = await productsService.getProduct(req.params.id);
    res.json({
      meta: {
        status: 200,
        total: product.length,
        url: req.originalUrl,
      },
      data: product,
    });
  },

  //Solo creo Api para crear producto no para la vista de formulario
  create: async (req, res) => {
    product = await productsService.createProduct(req.body, req.file);
    res.json({
      meta: {
        status: 201,
        total: product.length,
        url: req.originalUrl,
      },
      data: product,
    });
  },

  //Solo creo Api para Editar producto no para la vista de formulario
  update: async (req, res) => {
    await productsService.updateProduct(req.params.id, req.body);
    res.json({
      meta: {
        status: 201,
        total: product.length,
        url: req.originalUrl,
      },
      data: product,
    });
  },

  destroy: async (req, res) => {
    await productsService.deleteProduct(req.params.id);
    res.json({
      meta: {
        status: 200,
        total: product.length,
        url: req.originalUrl,
      },
    });
  },
};
