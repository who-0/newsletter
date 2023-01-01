const Users = require("./users.mongo");

const addUser = async (user) => {
  console.log("User", user);
  const newUser = {
    firstname: user.firstName,
    lastname: user.lastName,
    email: user.email,
  };
  console.log(newUser);
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

const deleteUser = async (id) => {
  return await Users.deleteOne({ id });
};
module.exports = {
  addUser,
  findUser,
  findUsers,
  deleteUser,
};
