const express = require("express");
const router = express.Router();
const userController = require("./../controller/userController");

router
    .route("/login")
    .post(userController.Login);

router
    .route("/signup")
    .post(userController.SignUp);

module.exports = router;