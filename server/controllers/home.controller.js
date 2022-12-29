const path = require("path");
const { addUser } = require("../models/users.model");

const httpGetHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
};
const httpPostHome = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(404).json({
      error: "Please All fill input.",
    });
  }

  const newUser = await addUser(req.body);
  console.log("newUser", newUser);
  return res.status(200).json({ newUser });
};

module.exports = { httpGetHome, httpPostHome };
