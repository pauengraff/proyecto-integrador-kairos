const { where } = require("sequelize");
const { Product } = require("../database/models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getAllProducts: () => {
    return Product.findAll({ include: ["category", "brand"] });
  },

  getProduct: (id) => {
    return Product.findByPk(id, { include: ["category", "brand"] });
  },

  getProductByCategory: (categoryId) => {
    return Product.findAll({
      include: ["category", "brand"],
      where: { id_category: categoryId },
    });
  },

  getAllProductsAndCount: ({ pageSize, offset }) => {
    return Product.findAndCountAll(
      { include: ["category", "brand"] },
      {
        limit: pageSize,
        offset: offset,
      }
    );
  },

  createProduct: (body, file) => {
    return Product.create({
      id: uuidv4(),
      name: body.name,
      price: Number(body.price),
      description: body.description,
      id_brand: body.brand,
      id_category: body.category,
      image: file ? file.filename : "default-image.jpeg",
    });
  },

  updateProduct: (id, body) => {
    return Product.update(
      {
        name: body.name,
        price: Number(body.price),
        description: body.description,
        id_brand: body.brand,
        id_category: body.category,
      },
      {
        where: { id: id },
      }
    );
  },

  deleteProduct: (id) => {
    return Product.destroy({
      where: { id: id },
    });
  },
};
