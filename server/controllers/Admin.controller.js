const { ok } = require("assert");
const path = require("path");

const httpGetAdminSignup = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "signup.html")
  );
};

const httpPostAdminSignup = (req, res) => {
  console.log(req.body);
  const { uname, pwd, email, code, role } = req.body;
  if (!uname || !pwd || !email || !code || !role) {
    return res.status(400).json({
      error: "Missing some input. Please All Fill!",
    });
  }
  return res.status(200).json(req.body);
};

const httpGetAdminLogin = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "login.html")
  );
};

const httpPostAdminLogin = (req, res) => {
  const { email, pwd } = req.body;
  console.log(req.body);
  return res.status(200).json(req.body);
};

const httpGetAdmin = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "adminPenel.html")
  );
};

module.exports = {
  httpGetAdmin,
  httpGetAdminSignup,
  httpGetAdminLogin,
  httpPostAdminSignup,
  httpPostAdminLogin,
};
