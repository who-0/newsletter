const express = require("express");
const {
  httpGetAdmin,
  httpGetAdminSignup,
  httpGetAdminLogin,
} = require("../controllers/Admin.controller");
const adminRouter = express.Router();

adminRouter.get("/", httpGetAdmin);
adminRouter.get("/signup", httpGetAdminSignup);
adminRouter.get("/login", httpGetAdminLogin);

module.exports = adminRouter;
