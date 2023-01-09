const path = require("path");
const jwt = require("jsonwebtoken");
const { R_TOKEN, A_TOKEN } = process.env;
const httpGetSuccess = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "success.html"));
};

const httpGetError = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "error.html"));
};

const refreshToken = async (req, res) => {
  try {
    const { newToken } = req.cookies;
    await jwt.verify(newToken, R_TOKEN, (err, result) => {
      if (err) {
        return res.status(401).json({
          error: "Your account is some problem. Please contact administor!",
        });
      } else {
        const { email, role } = result;
        const userToken = jwt.sign({ email, role }, A_TOKEN, {
          expiresIn: "1d",
        });
        res.cookie("userToken", userToken, { httpOnly: true });
        return res.redirect("/admin");
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(503).json({
      error: err.message,
    });
  }
};

module.exports = {
  httpGetSuccess,
  httpGetError,
  refreshToken,
};
