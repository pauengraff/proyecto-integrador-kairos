const usersServiceSql = require("../services/users-service-sql");
const rolServiceSql = require("../services/rol-service-sql");

module.exports = {
  index: (req, res) => {
    usersServiceSql.getAllUsers().then((users) => {
      res.render("users/usersList-sql", { users });
    });
  },

  // DETAIL - Detail from one user ID
  detailById: (req, res) => {
    usersServiceSql.getUser(req.params.id).then((user) => {
      res.render("users/profile-sql", { user });
    });
  },
}