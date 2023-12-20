const { Router } = require("express");
const router = Router();

const apiRouter = require("./api/index");
router.use("/api", apiRouter);

const mainController = require("../controllers/main-controller");
router.get("/", mainController.index);
router.get("/contact", mainController.contact);

const productsRouter = require("./products-router");
router.use("/products", productsRouter);

const usersRouter = require("./users-router");
router.use("/users", usersRouter);

module.exports = router;
