const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/main-controller");
router.get("/", mainController.index);

const productsRouter = require("./products-router");
router.use("/products", productsRouter);

const usersRouter = require("./users-router");
router.use("/users", usersRouter);

const apiRouter = require("./api/index");
router.use("/api", apiRouter);

module.exports = router;
