const { httpGetHome } = require("../controllers/home.controller");
const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", httpGetHome);
module.exports = homeRouter;
