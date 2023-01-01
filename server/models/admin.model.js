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
  console.log(newMember);
  return await Admin.findOneAndUpdate({ email }, newMember, {
    upsert: true,
    new: true,
  });
};

const findMember = async (data) => {
  const { email } = data;
  return await Admin.findOne({ email });
};

module.exports = {
  addMember,
  findMember,
};
