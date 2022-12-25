const path = require("path");
const httpGetAdmin = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "adminPenel.html")
  );
};

const httpGetAdminSignup = (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "signup.html")
  );
};

module.exports = {
  httpGetAdmin,
  httpGetAdminSignup,
};
