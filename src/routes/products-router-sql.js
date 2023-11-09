const express = require("express");
const router = express.Router();
const path = require("path");

const productsControllerSql = require("../controllers/products-controller-sql");
router.get("/", productsControllerSql.list);

module.exports = router;
