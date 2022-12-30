const express = require("express");
const homeRouter = require("./home.router");
const actionRouter = require("./action.router");
const adminRouter = require("./Admin.router");
const api = express.Router();

api.use("/", homeRouter);
api.use("/", actionRouter);
api.use("/admin", adminRouter);

api.get("*", (req, res) => {
  // res.status(404).json({
  //   error: "Your request is not defined in our system!",
  // });
  const encoded = encodeURIComponent(
    "Your request is not defined in our system"
  );
  res.redirect(`/error?${encoded}`);
});
module.exports = api;
