const express = require("express");
const {
  httpGetAdmin,
  httpGetAdminSignup,
  httpGetAdminLogin,
  httpPostAdminSignup,
  httpPostAdminLogin,
  httpAllSignup,
} = require("../controllers/Admin.controller");
const adminRouter = express.Router();

adminRouter.get("/", httpGetAdmin);
adminRouter.get("/signup", httpGetAdminSignup);
adminRouter.post("/signup", httpPostAdminSignup);
adminRouter.post("/allsignup", httpAllSignup);
adminRouter.get("/login", httpGetAdminLogin);
adminRouter.post("/login", httpPostAdminLogin);

module.exports = adminRouter;
