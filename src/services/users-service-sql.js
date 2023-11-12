const { User } = require("../database/models");

const usersServices = {
  getAllUsers: () => {
    return Users.findAll({ include: ["rol"] });
  },

  getUser: (id) => {
    const user = User.findById(id, { include: ["rol"] });
    return user;
  },
}