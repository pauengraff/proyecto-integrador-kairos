const { Brand } = require("../database/models");

module.exports = {
  getAllBrands: () => {
    return Brand.findAll();
  },
};
