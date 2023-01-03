const Admin = require("./admin.mongo");

const addMember = async (data) => {
  try {
    const { uname, hpwd, email, role, newToken } = data;
    const newMember = {
      username: uname,
      email,
      password: hpwd,
      role,
      newToken,
    };
    return await Admin.findOneAndUpdate({ email }, newMember, {
      upsert: true,
      new: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({});
  }
};

const findMember = async (email) => {
  return await Admin.findOne({ email });
};

const updatedMember = async (data) => {
  const { email } = data;
  return await Admin.findOneAndUpdate({ email }, data, { new: true });
};

module.exports = {
  addMember,
  findMember,
  updatedMember,
};
