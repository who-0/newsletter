const express = require("express");
const {
  httpGetAdmin,
  httpGetAdminSignup,
} = require("../controllers/Admin.controller");
const adminRouter = express.Router();

adminRouter.get("/", httpGetAdmin);
adminRouter.get("/signup", httpGetAdminSignup);

module.exports = adminRouter;
