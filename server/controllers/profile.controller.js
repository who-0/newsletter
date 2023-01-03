const path = require("path");
const { findMember, updatedMember } = require("../models/admin.model");

const httpGetProfile = async (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "profile.html")
  );
};

const httpPostProfile = async (req, res) => {
  const updatedUser = await updatedMember(req.body);
  return res.status(206).json(updatedUser);
};

const httpLogout = async (req, res) => {
  res.clearCookie("newToken");
  res.clearCookie("userToken");
  return res.redirect("/admin/login");
};

const httpFindUserProfile = async (req, res) => {
  const { email } = req.data;
  const user = await findMember(email);
  return res.status(200).json(user);
};

module.exports = {
  httpGetProfile,
  httpFindUserProfile,
  httpPostProfile,
  httpLogout,
};
