const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  // configuracion de guardado //
  destination: path.join(__dirname, "../../public/images/users/"), // destino donde va a guardar el archivo
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // original name, deja extension del archivo
  },
});

const upload = multer({ storage: storage });

// ************ Controller Require ************
const usersControllerSql = require("../controllers/users-controller-sql");

// Rutas usuarios
//GET ALL USERS
router.get("/", usersControllerSql.index);

/*** CREATE USER ***/
router.get("/register", usersControllerSql.register);
router.post("/register", upload.single ("image"), usersControllerSql.create);
/*router.post("/", upload.single("image"), productsController.store);*/

/*** EDIT USER ***/
//router.get("/edit/:id", productsController.edit);
//router.put("/:id", productsController.update);

/*** GET USER BY ID ***/
//router.get("/:id/", productsController.detailById);

/*** DELETE USER ***/
//router.delete("/:id", productsController.destroy);

module.exports = router;