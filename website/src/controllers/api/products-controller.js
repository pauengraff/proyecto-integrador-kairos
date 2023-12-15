const productsService = require("../../services/products-service");

module.exports = {
  count: async (req, res) => {
    const pageSize = 5;
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;
    const { count, rows } = await productsService.getAllProductsAndCount({
      pageSize,
      offset,
    });
    res.json({
      meta: {
        status: 200,
        total: count,
        url: req.originalUrl,
        nextPage: `${req.originalUrl.split("?")[0]}?page=${page + 1}`,
      },
      data: rows,
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
        status: 200,
        total: product.length,
        url: req.originalUrl,
      },
      data: product,
    });
  },
  // Eliminar producto
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
