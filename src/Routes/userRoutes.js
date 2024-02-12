const express = require("express");
const { registerController } = require("../Controllers/userController");
const router = express.Router();




router.post("/register", registerController);


module.exports = router;