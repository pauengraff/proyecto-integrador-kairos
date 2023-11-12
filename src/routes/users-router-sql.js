const express = require("express");
const router = express.Router();
const path = require("path");

const usersControllerSql = require("../controllers/users-controller-sql");
router.get("/userList-sql", usersControllerSql.index);

module.exports = router;