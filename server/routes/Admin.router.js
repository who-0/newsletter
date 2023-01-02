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
const { httpGetProfile } = require("../controllers/profile.controller");
const { userVerify } = require("../middlewares/verify.middleware");
const adminRouter = express.Router();

adminRouter.get("/", userVerify, httpGetAdmin);
adminRouter.get("/profile", userVerify, httpGetProfile);
adminRouter.get("/user/:id", userVerify, httpDelete);
adminRouter.get("/signup", httpGetAdminSignup);
adminRouter.post("/signup", httpPostAdminSignup);
adminRouter.get("/allsignup", httpAllSignup);
adminRouter.get("/login", httpGetAdminLogin);
adminRouter.post("/login", httpPostAdminLogin);

module.exports = adminRouter;
