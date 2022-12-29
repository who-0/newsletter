const Users = require("./users.mongo");

const addUser = async (user) => {
  const newUser = {
    firstname: user.firstName,
    lastname: user.lastName,
    email: user.email,
  };
  return await Users.findOneAndUpdate({ newUser }, (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(result);
      return result;
    }
  });
};

const findUsers = async () => {
  await Users.find({});
};

const findUser = async (email) => {
  await Users.findOne({ email });
};
module.exports = {
  addUser,
  findUser,
  findUsers,
};
