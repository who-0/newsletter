const path = require("path");
const jwt = require("jsonwebtoken");
const { addMember } = require("../models/admin.model");
const { findUsers, deleteUser } = require("../models/users.model");
const { A_TOKEN, R_TOKEN } = process.env;

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
  const userToken = jwt.sign({ email }, A_TOKEN, {
    expiresIn: "1m",
  });
  const newToken = jwt.sign({ email }, R_TOKEN);
  const newUser = {
    ...req.body,
    newToken,
  };
  const newMember = await addMember(newUser);
  res.cookie("userToken", userToken, { httpOnly: true });
  res.cookie("newToken", newToken, { httpOnly: true });
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
  const allSignup = await findUsers({});
  return res.status(200).json(allSignup);
};

const httpDelete = async (req, res) => {
  const id = req.params.id;
  await deleteUser(id);
  return res.redirect("/admin");
};

module.exports = {
  httpGetAdmin,
  httpGetAdminSignup,
  httpGetAdminLogin,
  httpPostAdminSignup,
  httpPostAdminLogin,
  httpAllSignup,
  httpDelete,
};
