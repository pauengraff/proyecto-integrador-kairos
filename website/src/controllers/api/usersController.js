const usersService = require("../../services/users-service");

module.exports = {
  list: async (req, res) => {
    const user = await usersService.getAllUsers();
    res.json({
      meta: {
        status: 200,
        total: user.length,
        url: req.originalUrl,
      },
      data: user,
    });
  },

  detailById: async (req, res) => {
    const user = await usersService.getUserById(req.params.id);
    res.json({
      meta: {
        status: 200,
        total: user.length,
        url: req.originalUrl,
      },
      data: user,
    });
  },

  //Solo creo Api para crear usuario no para la vista de formulario
  create: async (req, res) => {
    user = await usersService.createUser(req.body, req.file);
    res.json({
      meta: {
        status: 201,
        total: user.length,
        url: req.originalUrl,
      },
      data: user,
    });
  },

  //Solo creo Api para Editar usuario no para la vista de formulario
  update: async (req, res) => {
    await usersService.updateUser(req.params.id, req.body);
    res.json({
      meta: {
        status: 201,
        total: user.length,
        url: req.originalUrl,
      },
      data: user,
    });
  },
  // Eliminar usuario
  destroy: async (req, res) => {
    await usersService.deleteUser(req.params.id);
    res.json({
      meta: {
        status: 200,
        total: user.length,
        url: req.originalUrl,
      },
    });
  },
};
