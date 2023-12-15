const express = require("express");
const router = express.Router();

const apiUsersController = require("../../controllers/api/users-controller");

// router.get("/", apiUsersController.list);

router.get("/count", apiUsersController.count);

router.get("/:id/", apiUsersController.detailById);

router.post("create/", apiUsersController.create);

router.put("edit/:id", apiUsersController.update);

router.delete("delete/:id", apiUsersController.destroy);

module.exports = router;
