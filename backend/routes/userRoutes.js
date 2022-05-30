const express = require("express");
const { authUser } = require("../controllers/userController");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
module.exports = router;
