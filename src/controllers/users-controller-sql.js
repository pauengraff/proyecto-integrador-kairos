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
  create: (req, res) => {
    const register = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      birth_date: req.body.birth_date,
      password: bcrypt.hashSync(req.body.password, 10), //password encriptado
      avatar: req.file ? req.file.filename : "user-default-image.jpeg",
    }

    usersServices.getCreated(register).then((user) => {
      res.redirect("usersList-sql", { user });
    })
  },

  }

  





