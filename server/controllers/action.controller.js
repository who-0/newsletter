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
  const { newToken } = req.cookies;
  await jwt.verify(newToken, R_TOKEN, (err, result) => {
    if (err) {
      return res.status(404).json({
        error: "Your account is some problem. Please contact administor!",
      });
    }
    const { email, role } = result;
    const userToken = jwt.sign({ email, role }, A_TOKEN, { expiresIn: "1d" });
    res.cookie("userToken", userToken, { httpOnly: true });
    return res.redirect("/admin");
  });
};

module.exports = {
  httpGetSuccess,
  httpGetError,
  refreshToken,
};
