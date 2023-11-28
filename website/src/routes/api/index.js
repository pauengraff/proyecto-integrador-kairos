const express = require('express');
const router = express.Router();

const apiProductsRouter = require("./productsRoutes");
router.use("/products", apiProductsRouter);

module.exports = router;