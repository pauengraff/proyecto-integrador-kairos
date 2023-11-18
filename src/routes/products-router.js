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

const productsController = require("../controllers/products-controller");

// Products create validation
const validateForm = require("../validation/validation-addproduct");
const addProductMiddleware = require("../middlewares/addProductMiddleware");

// Rutas products
//GET ALL PRODUCTS
router.get("/", productsController.index);

// *** PRODUCT CART ***/
router.get("/Cart", productsController.productCart);

/*** CREATE ONE PRODUCT ***/
router.get("/add", productsController.add);
router.post(
  "/",
  upload.single("image"),
  validateForm,
  addProductMiddleware,

  productsController.store
);

/*** EDIT PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/:id", productsController.update);

/*** GET ONE PRODUCT BY ID ***/
router.get("/:id/", productsController.detailById);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

module.exports = router;
