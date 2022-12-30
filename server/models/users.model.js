const Users = require("./users.mongo");

const addUser = async (user) => {
  const newUser = {
    firstname: user.firstName,
    lastname: user.lastName,
    email: user.email,
  };
  return await Users.findOneAndUpdate({ email: newUser.email }, newUser, {
    upsert: true,
    returnDocument: true,
    new: true,
  });
};

const findUsers = async () => {
  return await Users.find({});
};

const findUser = async (email) => {
  return await Users.findOne({ email });
};
module.exports = {
  addUser,
  findUser,
  findUsers,
};
