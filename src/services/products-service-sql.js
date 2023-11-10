const { Product } = require("../database/models");

module.exports = {
  getAllProducts: () => {
    return Product.findAll({ include: ["category", "brand"] });
  },

  /* servicios a crear viendo modelo SQL
  getProduct: (id) => {
    const product = db.products.findById(id);
    return product;
  },
  createProduct: (product) => {
    db.products.create(product);
  },
  updateProduct: (id, product) => {
    console.log(`Updating IN SERVICE product ${product.name}`);
    db.products.update(id, product);
  },
  deleteProduct: (id) => {
    db.products.delete(id);
  },
*/
};
