const express = require("express");
const router = express.Router();

// ** Multer middleware **//
const multerMiddleware = require("../middlewares/multer-middleware");
const productsUpload = multerMiddleware("products");

// ************ Controller Require ************

const productsController = require("../controllers/products-controller");

// Products create validation
const validateForm = require("../validation/validation-add-product");
const addProductMiddleware = require("../middlewares/add-product-middleware");
// Products Edit validation
const validateEditForm = require("../validation/validation-edit-product");
const editProductMiddleware = require("../middlewares/edit-product-middleware");

// Rutas products
//GET ALL PRODUCTS
router.get("/", productsController.index);

// *** PRODUCT CART ***/
router.get("/Cart", productsController.productCart);

/*** CREATE ONE PRODUCT ***/
router.get("/add", productsController.add);
router.post("/", productsUpload.single("image"), validateForm, addProductMiddleware, productsController.store);

/*** EDIT PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/:id", validateEditForm, editProductMiddleware, productsController.update);

/*** GET ONE PRODUCT BY ID ***/
router.get("/:id/", productsController.detailById);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

module.exports = router;
