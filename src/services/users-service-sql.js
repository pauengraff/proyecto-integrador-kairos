const { User } = require("../database/models");

module.exports = {
  getAllUsers: () => {
    return User.findAll();
    
  },
  getCreated: (registro) => {
    return User.create (registro);
    
  },



}
