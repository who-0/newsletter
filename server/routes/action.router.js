const express = require("express");
const {
  httpGetSuccess,
  httpGetError,
  refreshToken,
} = require("../controllers/action.controller");
const actionRouter = express.Router();

actionRouter.get("/success", httpGetSuccess);
actionRouter.get("/error", httpGetError);
actionRouter.get("/refresh", refreshToken);

module.exports = actionRouter;
