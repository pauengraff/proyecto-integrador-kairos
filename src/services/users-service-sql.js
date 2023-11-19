const { User } = require("../database/models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getAllUsers: () => {
    return User.findAll();
    
  },
  getCreated: (registro) => {
    return User.create (registro);
    
  },
  createUser: (body, file) => {
    return User.create({
      id: uuidv4(),
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      birth_date: body.birth_date,
      password: bcrypt.hashSync(body.password, 10), //password encriptado
      avatar: file ? file.filename : "user-default-image.jpeg",
    });
  },
  /*updateUser: (id, body) => {
    return Product.update(
      {
        name: body.name,
        price: Number(body.price),
        description: body.description,
        id_brand: body.id_brand,
        id_category: body.id_category,
      },
      {
        where: { id: id },
      }
    );*/
    /* deleteProduct: (id) => {
      return Product.destroy({
        where: { id: id },
      });
    },*/
  };

