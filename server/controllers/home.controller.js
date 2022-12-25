const path = require("path");
const httpGetHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
};
module.exports = { httpGetHome };
