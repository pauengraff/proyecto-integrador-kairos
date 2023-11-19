const usersServices = require("../services/users-service-sql");
const rolServiceSql = require("../services/rol-service-sql");
const bcrypt = require("bcryptjs");

module.exports = {
  index: (req, res) => {
    usersServices.getAllUsers().then((user) => {
      res.render("usersList-sql", { user });
    });
  },

  register: (req, res) => {
      res.render("register-sql");
  },

 // Process to create user on db
 create: async (req, res) => {
  const user = await usersServices.createUser(req.body, req.file);
  res.redirect("/usersList-sql");
},
};

  





