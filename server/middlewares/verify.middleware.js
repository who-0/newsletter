const jwt = require("jsonwebtoken");
const { A_TOKEN } = process.env;
const userVerify = async (req, res, next) => {
  const { userToken } = req.cookies;
  if (!userToken) {
    return res.redirect("/admin/login");
  } else {
    await jwt.verify(userToken, A_TOKEN, (err, result) => {
      if (err) {
        if (err.message === "jwt expired") {
          return res.redirect("/refresh");
        } else {
          return res.status(500).json({
            error: "Can't responding. Please try again later.",
          });
        }
      } else {
        req.data = result;
        next();
      }
    });
  }
};

module.exports = {
  userVerify,
};
