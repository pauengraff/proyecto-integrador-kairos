const db = require("../database/models");
const usersServices = require("../services/users-service-sql");
const rolServiceSql = require("../services/rol-service-sql");
const bcrypt = require("bcryptjs");

module.exports = {
  index: (req, res) => {
    usersServices.getAllUsers().then((user) => {
      res.render("usersList-sql", { user });
    });
  },
// REGISTER USER
// form to register user
  register: async (req, res) => {
    const [rol] = await Promise.all([
      rolServiceSql.getAllRoles(),
    ]);
      res.render("register-sql", {rol});
  },
 // Process to create user on db
 create: async (req, res) => {
  const user = await usersServices.createUser(req.body, req.file);
  res.redirect("/usersList-sql");
},
};

  





