const express = require("express");
const UserController = require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

// Create a new user
router.post("/create", UserController.createUser);
router.get("/getall", UserController.getUsers);
router.get("/getbyid/:id", UserController.getUserById);
router.patch("/update/:id", UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);

//login
router.post("/login", UserController.loginUser);

module.exports = router;
