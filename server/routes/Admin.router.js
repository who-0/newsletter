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
const {
  httpGetProfile,
  httpFindUserProfile,
  httpPostProfile,
} = require("../controllers/profile.controller");
const { userVerify } = require("../middlewares/verify.middleware");
const adminRouter = express.Router();

adminRouter.get("/", userVerify, httpGetAdmin);
adminRouter.get("/profile", userVerify, httpGetProfile);
adminRouter.get("/profile/user", userVerify, httpFindUserProfile);
adminRouter.get("/user/:id", userVerify, httpDelete);
adminRouter.get("/signup", httpGetAdminSignup);
adminRouter.get("/allsignup", userVerify, httpAllSignup);
adminRouter.get("/login", httpGetAdminLogin);

adminRouter.post("/profile/user", userVerify, httpPostProfile);
adminRouter.post("/signup", httpPostAdminSignup);
adminRouter.post("/login", httpPostAdminLogin);

module.exports = adminRouter;
