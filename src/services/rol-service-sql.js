const { Rol } = require("../database/models");

module.exports = {
  getAllRoles: () => {
    return Rol.findAll();
  },
};