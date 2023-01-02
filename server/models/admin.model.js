const Admin = require("./admin.mongo");

const addMember = async (data) => {
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
};

const findMember = async (email) => {
  return await Admin.findOne({ email });
};

module.exports = {
  addMember,
  findMember,
};
