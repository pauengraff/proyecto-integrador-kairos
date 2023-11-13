const { Product } = require("../database/models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getAllProducts: () => {
    return Product.findAll({ include: ["category", "brand"] });
  },

  getProduct: (id) => {
    return Product.findByPk(id, { include: ["category", "brand"] });
  },

  createProduct: (body) => {
    return Product.create({
      id: uuidv4(),
      name: body.name,
      price: Number(body.price),
      description: body.description,
      id_brand: body.id_brand,
      id_category: body.id_category,
      image: body.file ? body.file.filename : "default-image.jpeg", // bo|dy.image
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
