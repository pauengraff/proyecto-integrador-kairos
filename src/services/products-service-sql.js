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
      image: body.file ? body.file.filename : "default-image.jpeg",
    });
  },

  updateProduct: (id, body) => {
    return Product.update(
      {
        name: body.name,
        price: Number(body.price),
        description: body.description,
        brand: body.brand,
        category: body.category,
      },
      {
        where: { id: id },
      }
    );
  },
  // En este proceso me falta probar si funciona sin retirar las FK
  // el proceso esta en clase 39
  deleteProduct: (id) => {
    return Product.destroy({
      where: { id: id },
    });
  },
};
