const { findMember } = require("../models/admin.model");

const httpGetProfile = async (req, res) => {
  const { email } = req.data;
  const user = await findMember(email);
  return res.status(200).json(user);
};

module.exports = { httpGetProfile };
