const express = require("express");
const {
  httpGetAdmin,
  httpGetAdminSignup,
  httpGetAdminLogin,
  httpPostAdminSignup,
  httpPostAdminLogin,
  httpAllSignup,
  httpDelete,
} = require("../controllers/Admin.controller");
const { httpGetProfile } = require("../controllers/profile.controler");
const adminRouter = express.Router();

adminRouter.get("/", httpGetAdmin);
adminRouter.get("/user/:id", httpDelete);
adminRouter.get("/signup", httpGetAdminSignup);
adminRouter.post("/signup", httpPostAdminSignup);
adminRouter.get("/allsignup", httpAllSignup);
adminRouter.get("/login", httpGetAdminLogin);
adminRouter.post("/login", httpPostAdminLogin);
adminRouter.post("/profile", httpGetProfile);

module.exports = adminRouter;
