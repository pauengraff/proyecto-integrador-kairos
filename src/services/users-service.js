const db = require("../data/db");

const usersServices = {
  getAllUsers: () => {
    return db.users.showAll();
  },

  getUser: (id) => {
    const users = db.users.findById(id);
    return users;
  },

  create: (user) => {
    return db.users.create(user);
  },

  getfindByEmail: (email, body) => {
    const users = db.users.findByEmail(email, body);
    return users;
  },

  updateUser: (id, user) => {
    return db.users.update(id, user);
  },

  deleteUser: (id) => {
    return db.users.delete(id);
  },
};

module.exports = usersServices;
