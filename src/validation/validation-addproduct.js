const { body } = require("express-validator");
const path = require("path");
// archivos para validacion de formulario de creacion de producto

module.exports = [
  body("name").notEmpty().withMessage("Completa el Modelo"),
  body("brand").notEmpty().withMessage("Completa la Marca"),
  body("category").notEmpty().withMessage("Completa la Categoria"),
  body("description").notEmpty().withMessage("Agrega una descripcion"),
  body("price").notEmpty().withMessage("Falta el precio"),
  body("image").custom((value, { req }) => {
    let file = req.file;

    if (file) {
      let fileExtension = path.extname(file.originalname);
      let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    } else {
      throw new Error("Sube una imagen");
    }

    return true;
  }),
];
