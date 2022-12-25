const express = require("express");
const { httpGetAdmin } = require("../controllers/Admin.controller");
const adminRouter = express.Router();

adminRouter.get("/", httpGetAdmin);

module.exports = adminRouter;
