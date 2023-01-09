const path = require("path");
const { findMember, updatedMember } = require("../models/admin.model");

const httpGetProfile = async (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "admin_profile.html")
  );
};

const httpPostProfile = async (req, res) => {
  try {
    const updatedUser = await updatedMember(req.body);
    if (!updatedMember) {
      return res.status(400).json({
        error: "Your request is something wrong. Please try again.",
      });
    }
    return res.status(206).json(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: err.message,
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
    if (!user) {
      return res.status(400).json({
        error: "Your account not found in our database. Please Signup again.",
      });
    } else {
      return res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = {
  httpGetProfile,
  httpFindUserProfile,
  httpPostProfile,
  httpLogout,
};
