const express = require("express");
const homeRouter = require("./home.router");
const actionRouter = require("./action.router");
const adminRouter = require("./Admin.router");
const api = express.Router();

api.use("/", homeRouter);
api.use("/", actionRouter);
api.use("/admin", adminRouter);
module.exports = api;