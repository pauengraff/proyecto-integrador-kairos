const express = require("express");
const router = express.Router();

const apiProductsController = require("../../controllers/api/productsController");

router.get("/", apiProductsController.list);

router.get("/:id/", apiProductsController.detailById);

router.post("create/", apiProductsController.create);

router.put("edit/:id", apiProductsController.update);

router.delete("delete/:id", apiProductsController.destroy);

module.exports = router;
