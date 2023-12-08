const express = require('express');
const router = express.Router();

const apiProductsRouter = require("./productsRoutes");
router.use("/products", apiProductsRouter);

const apiUsersRouter = require("./usersRoutes");
router.use("/user", apiUsersRouter);

module.exports = router;