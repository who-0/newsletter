const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { addMember, findMember } = require("../models/admin.model");
const { findUsers, deleteUser } = require("../models/users.model");
const { A_TOKEN, R_TOKEN } = process.env;

const httpGetAdmin = async (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "adminPenel.html")
  );
};

const httpGetAdminSignup = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "signup.html")
  );
};

const httpGetAdminLogin = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "login.html")
  );
};

const httpPostAdminSignup = async (req, res) => {
  const { uname, pwd, email, code, role } = req.body;
  if (!uname || !pwd || !email || !code || !role) {
    return res.status(400).json({
      error: "Missing some input. Please All Fill!",
    });
  }
  const oldUser = await findMember(email);
  if (oldUser) {
    return res.status(406).json(oldUser);
  }
  const hpwd = await bcrypt.hash(pwd, 8);
  const userToken = jwt.sign({ email, role }, A_TOKEN, {
    expiresIn: "1m",
  });
  const newToken = jwt.sign({ email, role }, R_TOKEN);
  const newUser = {
    uname,
    email,
    code,
    role,
    hpwd,
    newToken,
  };
  const newMember = await addMember(newUser);
  res.cookie("userToken", userToken, { httpOnly: true });
  res.cookie("newToken", newToken, { httpOnly: true });
  return res.status(200).json(newMember);
};

const httpPostAdminLogin = async (req, res) => {
  const { email, pwd } = req.body;
  const eUser = await findMember(email);
  if (!eUser) {
    return res.status(404).json({
      error: "Your account is missing in our server",
    });
  }
  const solvepwd = await bcrypt.compare(pwd, eUser.password);
  if (!solvepwd) {
    return res.status(400).json({
      error: "Your password is incorrect",
    });
  }
  const userToken = jwt.sign({ email }, A_TOKEN, {
    expiresIn: "1m",
  });
  const newToken = jwt.sign({ email }, R_TOKEN);
  res.cookie("userToken", userToken, { httpOnly: true });
  res.cookie("newToken", newToken, { httpOnly: true });
  return res.status(200).json({
    success: true,
  });
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
