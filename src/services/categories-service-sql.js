const { Category } = require("../database/models");

module.exports = {
  getAllCategories: () => {
    return Category.findAll();
  },
  getCategoriesDetail: (id) => {
    return Category.findByPk(id);
  },
};
