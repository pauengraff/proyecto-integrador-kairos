const express = require('express');
const Router = express.Router();

const apiProductsController = require("../../controllers/api/productsController");
router.get("/", apiProductsController.list);

module.exports = router;