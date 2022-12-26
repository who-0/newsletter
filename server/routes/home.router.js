const { httpGetHome, httpPostHome } = require("../controllers/home.controller");
const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", httpGetHome);
homeRouter.post("/", httpPostHome);
module.exports = homeRouter;
