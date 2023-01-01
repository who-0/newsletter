const jwt = require("jsonwebtoken");

const userVerify = (req, res, next) => {
  const { userToken } = req.cookies;
  if (!userToken) {
    return res.status(406).json({
      error: "Your request is not authorized",
    });
  }
};
