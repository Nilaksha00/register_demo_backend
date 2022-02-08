const express = require("express");
const userController = require("./user.controller");

const router = express.Router();

router.post("/", userController.addUser);
router.get("/:email", userController.checkUser);

module.exports = router;
