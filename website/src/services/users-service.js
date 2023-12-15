const { User } = require("../database/models");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");

module.exports = {
  getAllUsers: () => {
    return User.findAll();
  },

  getAllUsersAndCount: ({ pageSize, offset }) => {
    return User.findAndCountAll(
      { include: "rol" },
      {
        limit: pageSize,
        offset: offset,
      }
    );
  },

  getCreated: (registro) => {
    return User.create(registro);
  },
  getUserByEmail: async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
  },

  getUserById: async (id) => {
    const user = await User.findOne({ where: { id } });
    return user;
  },

  createUser: (body, file) => {
    return User.create({
      id: uuidv4(),
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      birth_date: body.birth_date,
      password: bcrypt.hashSync(body.password, 10),
      id_rol: body.rol ? body.rol : "2",
      avatar: file ? file.filename : "user-default-image.jpeg",
    });
  },
  updateUser: (id, body) => {
    return User.update(
      {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        birth_date: body.birth_date,
        id_rol: body.rol ? body.rol : "2",
      },
      {
        where: { id: id },
      }
    );
  },
  deleteUser: (id) => {
    return User.destroy({
      where: { id: id },
    });
  },
};
