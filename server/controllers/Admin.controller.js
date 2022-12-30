const { ok } = require("assert");
const path = require("path");
const { addMember } = require("../models/admin.model");
const { findUsers } = require("../models/users.model");

const httpGetAdminSignup = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "signup.html")
  );
};

const httpPostAdminSignup = async (req, res) => {
  const { uname, pwd, email, code, role } = req.body;
  if (!uname || !pwd || !email || !code || !role) {
    return res.status(400).json({
      error: "Missing some input. Please All Fill!",
    });
  }
  const newMember = await addMember(req.body);
  console.log("server", newMember);
  return res.status(200).json(newMember);
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

const httpGetAdmin = async (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "adminPenel.html")
  );
};
const httpAllSignup = async (req, res) => {
  const allSignup = await findUsers();
  return res.status(200).json(allSignup);
};

module.exports = {
  httpGetAdmin,
  httpGetAdminSignup,
  httpGetAdminLogin,
  httpPostAdminSignup,
  httpPostAdminLogin,
  httpAllSignup,
};
