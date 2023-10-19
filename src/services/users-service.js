const db = require("../data/db");

const usersServices = {
  getAllUsers: () => {
    return db.users.showAll();
  },
  create: (user) => {
    db.users.create(user);
  },
  getfindByEmail:(userLogin)=>{
    db.users.findByEmail(userLogin);
  }
};

module.exports = usersServices;
