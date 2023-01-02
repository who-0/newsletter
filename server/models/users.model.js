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

async function findUser(email) {
  return await Users.findOne({ email }, { _id: 0, __v: 0 });
}

const deleteUser = async (id) => {
  return await Users.deleteOne({ id });
};
module.exports = {
  addUser,
  findUser,
  findUsers,
  deleteUser,
};
