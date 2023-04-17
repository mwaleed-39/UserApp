var express = require("express");
var router = express.Router();
const UserController = require("../Controllers/User");

router.route("/").post(UserController.addUser);
router.route("/sendEmail").post(UserController.sendEmail);
router.route("/Login").post(UserController.UserLogin);
router.route("/changePassword").post(UserController.changePassword);
router.route("/verifyPhone").post(UserController.verifyPhone);
router
  .route("/sendRegistrationEmail")
  .post(UserController.sendRegistrationEmail);
module.exports = router;
