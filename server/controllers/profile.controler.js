const { findUser } = require("../models/users.model");

const httpGetProfile = async (req, res) => {
  const user = await findUser({ email });
  return res.status(200).json(user);
};

module.exports = { httpGetProfile };
