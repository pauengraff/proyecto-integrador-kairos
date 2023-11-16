const { body } = require("express-validator");
const path = require("path");
// archivos para validacion de formulario de creacion de producto

module.exports = [
  body("name").notEmpty().withMessage("Completa el Modelo"),
  body("id_brand").notEmpty().withMessage("Completa la Marca"),
  body("id_category").notEmpty().withMessage("Completa la Categoria"),
  body("description").notEmpty().withMessage("Agrega una descripcion"),
  body("price").notEmpty().withMessage("Falta el precio"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];

    if (!file) {
      throw new Error("Subi una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];
