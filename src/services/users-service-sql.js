const { User } = require("../database/models");

const usersServices = {
  getAllUsers: () => {
    return User.findAll({ include: ["rol"] });
  },

  getUser: (id) => {
    const user = User.findByPk(id, { include: ["rol"] });
    return user;
  },
}