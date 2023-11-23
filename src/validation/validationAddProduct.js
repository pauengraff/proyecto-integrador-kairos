const { body } = require("express-validator");
const path = require("path");
// archivos para validacion de formulario de creacion de producto

module.exports = [
  body("name").notEmpty().withMessage("Completa el Modelo"),
  body("price").notEmpty().withMessage("Falta el precio"),
  body("brand").notEmpty().withMessage("Completa la Marca"),
  body("category").notEmpty().withMessage("Completa la Categoria"),
  body("description").notEmpty().withMessage("Agrega una descripcion"),
  body("image").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("Sube una imagen");
    }
    return true;
  }),
];
