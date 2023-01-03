const path = require("path");
const { addUser, findUser } = require("../models/users.model");

const httpGetHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
};
const httpPostHome = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email) {
      return res.status(404).json({
        error: "Please All fill input.",
      });
    } else {
      const oldUser = await findUser(email);
      if (oldUser) {
        return res.status(409).json(oldUser);
      } else {
        const newUser = await addUser(req.body);
        return res.status(200).json({ newUser });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      err: error.message,
    });
  }
};

module.exports = { httpGetHome, httpPostHome };
