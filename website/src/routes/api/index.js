const express = require("express");
const router = express.Router();

const apiProductsRouter = require("./products-routes");
router.use("/products", apiProductsRouter);

const apiUsersRouter = require("./users-routes");
router.use("/user", apiUsersRouter);

module.exports = router;
