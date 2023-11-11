const { Product } = require("../database/models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getAllProducts: () => {
    return Product.findAll({ include: ["category", "brand"] });
  },

  // servicios a crear viendo modelo SQL
  getProduct: (id) => {
    return Product.findByPK(id, { include: ["category", "brand"] });
  },

  createProduct: (body) => {
    return Product.create({
      id: uuidv4(),
      name: body.name,
      price: Number(body.price),
      description: body.description,
      brand: body.brand,
      category: body.category,
      image: req.file ? req.file.filename : "default-image.jpeg",
    });
  },
  /*
  updateProduct: (id, product) => {
    console.log(`Updating IN SERVICE product ${product.name}`);
    db.products.update(id, product);
  },
  deleteProduct: (id) => {
    db.products.delete(id);
  },
*/
};
