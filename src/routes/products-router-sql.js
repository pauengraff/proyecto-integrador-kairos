const express = require("express");
const router = express.Router();
const path = require("path");

const productsControllerSql = require("../controllers/products-controller-sql");
router.get("/", productsControllerSql.index);

module.exports = router;
