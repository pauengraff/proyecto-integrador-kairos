const usersServiceSql = require("../services/users-service-sql");
const rolServiceSql = require("../services/rol-service-sql");

module.exports = {
  index: (req, res) => {
    usersServiceSql.getAllUsers().then((user) => {
      res.render("usersList-sql", { user });
    });
  }
}



