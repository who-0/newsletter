const express = require("express");
const {
  httpGetSuccess,
  httpGetError,
} = require("../controllers/action.controller");
const actionRouter = express.Router();

actionRouter.get("/success", httpGetSuccess);
actionRouter.get("/error", httpGetError);

module.exports = actionRouter;
