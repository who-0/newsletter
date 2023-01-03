const path = require("path");
const { findMember, updatedMember } = require("../models/admin.model");

const httpGetProfile = async (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "profile.html")
  );
};

const httpPostProfile = async (req, res) => {
  try {
    const updatedUser = await updatedMember(req.body);
    return res.status(206).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      err: error.message,
    });
  }
};

const httpLogout = async (req, res) => {
  res.clearCookie("newToken");
  res.clearCookie("userToken");
  return res.redirect("/admin/login");
};

const httpFindUserProfile = async (req, res) => {
  try {
    const { email } = req.data;
    const user = await findMember(email);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      err: error.message,
    });
  }
};

module.exports = {
  httpGetProfile,
  httpFindUserProfile,
  httpPostProfile,
  httpLogout,
};
