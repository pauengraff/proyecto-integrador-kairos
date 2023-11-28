const express = require('express');
const Router = express.Router();

const apiProductsRouter = require("./productsRoutes");
router.use("/products", apiProductsRouter);

module.exports = router;