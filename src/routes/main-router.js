const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/main-controller");
router.get("/", mainController.index);

const productsRouter = require("./products-router");
router.use("/products", productsRouter);

const usersRouter = require("./users-router");
router.use("/users", usersRouter);

// Test vista de migracion a SQL
const sqlRouter = require("./products-router-sql");
router.use("/sql", sqlRouter);

module.exports = router;
