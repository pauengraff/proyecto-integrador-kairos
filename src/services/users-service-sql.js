const { User } = require("../database/models");

module.exports = {
  getAllUsers: () => {
    return User.findAll();
  },



}
