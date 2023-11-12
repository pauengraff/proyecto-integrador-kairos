const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  // configuracion de guardado //
  destination: path.join(__dirname, "../../public/images/products"), // destino donde va a guardar el archivo
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // original name, deja extension del archivo
  },
});

const upload = multer({ storage: storage });

// ************ Controller Require ************
//const productsController = require("../controllers/products-controller");
// Arranco test de vistas con el controlador todo dirigido a SQL
const productsController = require("../controllers/products-controller-sql");

// Rutas products
//GET ALL PRODUCTS
router.get("/", productsController.index);

// *** PRODUCT CART ***/
router.get("/Cart", productsController.productCart);

/*** CREATE ONE PRODUCT ***/
router.get("/add", productsController.add);
router.post("/", upload.single("image"), productsController.store);

/*** EDIT PRODUCT ***/
//Formulario de edición de productos
router.get("/edit/:id", productsController.edit);
router.put("/:id", productsController.update);

/*** GET ONE PRODUCT BY ID ***/
router.get("/:id/", productsController.detailById);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

module.exports = router;
