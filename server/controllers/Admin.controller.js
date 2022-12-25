const path = require("path");
const httpGetAdmin = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "Admin", "adminPenel.html")
  );
};
module.exports = {
  httpGetAdmin,
};
