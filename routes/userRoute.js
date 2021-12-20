const express = require("express");
const router = express.Router();
const userController = require("./../controller/userController");

router
    .route("/login")
    .post(userController.Login);

router
    .route("/signup")
    .post(userController.SignUp);

router
    .route("/resetPass")
    .post(userController.ResetPass);

router
    .route("/changePassword")
    .post(userController.ChangePass);


module.exports = router;