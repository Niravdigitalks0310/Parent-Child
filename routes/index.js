const express = require("express");
const router = express.Router();

const UserRouter = require("./user.routes");

router.use("/user", UserRouter);

module.exports = router;